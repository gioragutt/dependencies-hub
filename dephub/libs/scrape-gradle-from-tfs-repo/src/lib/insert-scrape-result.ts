import { cypherNode, mapToCreateQueries, relation, toMapFrom, collectParameters } from '@dephub/cypher-utils';
import { QueryResult, Session } from 'neo4j-driver';
import { ScrapeResult } from './scrape-result';

export async function insertScrapeResult(
  {
    repositoryName,
    modules,
    gitVersion,
    gitVersionType,
  }: ScrapeResult,
  session: Session,
): Promise<QueryResult> {

  const repoNode = cypherNode('Repository', { name: repositoryName });

  const moduleNodes = toMapFrom(modules, m => cypherNode('Module', { name: m.moduleName }));

  const moduleVersionNodes = toMapFrom(modules, m => cypherNode('ModuleVersion', {
    name: m.moduleName,
    version: m.version,
    gitVersion,
    gitVersionType,
  }));

  const versionOfRelations = toMapFrom(modules, m => {
    const moduleNode = moduleNodes.get(m);
    const moduleVersionNode = moduleVersionNodes.get(m);
    return relation('VERSION_OF', moduleVersionNode, moduleNode);
  });

  const residesInRelations = toMapFrom(modules, m => {
    const moduleNode = moduleNodes.get(m);
    return relation('RESIDES_IN', moduleNode, repoNode, {
      pathInRepo: m.pathInRepo,
    });
  });

  const query = `CREATE
  // ==== Repository ===

  ${repoNode.createQuery},

  // ==== Modules ====

  ${mapToCreateQueries(moduleNodes)},

  // ==== Module Version ====

  ${mapToCreateQueries(moduleVersionNodes)},

  // ==== VERSION_OF ====

  ${mapToCreateQueries(versionOfRelations)},

  // ==== RESIDES_IN ==== 

  ${mapToCreateQueries(residesInRelations)};
  `;

  const params = collectParameters(
    repoNode,
    moduleNodes,
    moduleVersionNodes,
    versionOfRelations,
    residesInRelations,
  );

  console.log(query);
  console.log(params);

  return null;
  // return session.run(query, params);
}
import { cypherNode } from '@dephub/cypher-utils';
import { Session } from 'neo4j-driver';
import * as extract from './extract-cypher-from-scrape-result';
import { RepositoryNode } from './neo4j-models';
import { ScrapeResult } from './scraped-data-models';

export async function insertScrapeResult(
  {
    repositoryName,
    modules,
    gitVersion,
    gitVersionType,
  }: ScrapeResult,
  session: Session,
): Promise<void> {

  const repoNode = cypherNode<RepositoryNode>('Repository', { name: repositoryName });

  const moduleNodes = extract.moduleNodes(modules);
  const moduleVersionNodes = extract.moduleVersionNodes(modules, gitVersion, gitVersionType);
  const versionOfRelations = extract.versionOfRelations(modules, moduleNodes, moduleVersionNodes);
  const residesInRelations = extract.residesInRelations(modules, moduleNodes, repoNode);

  const allDependencies = modules.flatMap(m => m.dependencies);
  const dependenciesModuleNodes = extract.dependenciesModuleNodes(allDependencies);
  const dependenciesModuleVersionNodes = extract.dependenciesModuleVersionNodes(allDependencies);

  const dependsOnLibraryRelations = extract.dependsOnLibrariesRelations(
    modules, moduleVersionNodes, dependenciesModuleVersionNodes);

  const allData = [
    repoNode,
    moduleNodes,
    moduleVersionNodes,
    versionOfRelations,
    residesInRelations,
    dependenciesModuleNodes,
    dependenciesModuleVersionNodes,
    dependsOnLibraryRelations,
  ].flatMap(item => {
    if (Array.isArray(item)) {
      return item;
    }
    if (item instanceof Map) {
      return [...item.values()];
    }
    return [item];
  });

  const tx = session.beginTransaction();

  console.time('run');
  await Promise.all(allData.map(item =>
    tx.run(item.mergeQuery, item.paramsForQuery)));
  console.timeEnd('run');

  try {
    console.time('commit');
    await tx.commit();
    console.timeEnd('commit');
  } catch (e) {
    console.log(e);
    return tx.rollback();
  }
}

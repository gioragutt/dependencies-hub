import { BadRequest } from 'http-errors';
import Joi from 'joi';
import { neo4j, session } from './neo4j';

export interface SearchModulesQuery {
  pageSize?: number;
  page?: number;
}

const inputValidator = Joi.object<SearchModulesQuery>({
  pageSize: Joi.number().greater(0).default(10),
  page: Joi.number().min(0).default(0),
});

export interface SearchModulesResponse {
  moduleName: string;
  isLibrary: boolean;
  repoName: string | null;
  pathInRepo: string | null;
}

const MODULE_LIB_AND_REPO = `
  MATCH
    (m:Module)
  OPTIONAL MATCH
    (dep:Module)<-[:VERSION_OF]-(:ModuleVersion)-[:DEPENDS_ON_LIBRARY]->(:ModuleVersion)-[:VERSION_OF]->(m)
  WITH
    m, count(dep) > 0 as isLibrary
  OPTIONAL MATCH
    (m)-[rel:RESIDES_IN]->(repo:Repository)
  RETURN
    m.name as moduleName, isLibrary, repo.name as repoName, rel.path as pathInRepo
  SKIP $skip
  LIMIT $limit
`;

export async function searchModules(input: SearchModulesQuery): Promise<SearchModulesResponse[]> {
  const { value, error } = inputValidator.validate(input);
  if (error) {
    throw new BadRequest(error.message);
  }

  const { page, pageSize } = value as SearchModulesQuery;

  const { records } = await session.run(MODULE_LIB_AND_REPO, {
    limit: neo4j.int(pageSize),
    skip: neo4j.int(pageSize * page),
  });

  return records.map(r => r.toObject() as SearchModulesResponse);
}
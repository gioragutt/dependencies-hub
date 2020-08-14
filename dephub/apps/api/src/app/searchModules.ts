import { session } from './neo4j';
import * as neo4j from 'neo4j-driver';
import { BadRequest } from 'http-errors';
import is from '@sindresorhus/is';

export interface SearchModulesQuery {
  pageSize?: number;
  page?: number;
}

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
`

export async function searchModules({ page, pageSize }: SearchModulesQuery): Promise<SearchModulesResponse[]> {
  if (!is.number(page) || page < 0) {
    throw new BadRequest(`Page must non-negative integer but got ${page}`);
  }
  if (!is.number(pageSize) || pageSize <= 0) {
    throw new BadRequest(`Page Size must positive integer but got ${pageSize}`);
  }

  const res = await session.run(MODULE_LIB_AND_REPO, {
    limit: neo4j.int(pageSize),
    skip: neo4j.int(pageSize * page),
  });

  return res.records.map(r => r.toObject() as SearchModulesResponse);
}
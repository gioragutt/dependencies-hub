import { HasMergeQuery, prepareParamsForCreateQuery } from './merge-query';
import { CypherNode } from './cypher-node';
import { collectParameters, newNodeId, Params } from './utils';

export interface CypherRelation<P extends Params> extends HasMergeQuery<P> {
  nodeName: string;
}

export function cypherRelation<P extends Params = {}>(
  relationName: string,
  fromNode: CypherNode<any>,
  toNode: CypherNode<any>,
  params?: P,
): CypherRelation<P> {
  const nodeName = `${relationName.toLowerCase()}_${newNodeId(relationName)}`;
  const { paramsForQuery, paramsInQueryString } = prepareParamsForCreateQuery<P>(nodeName, params);

  const updateStatement = paramsInQueryString
    ? `SET ${nodeName} += ${paramsInQueryString}`
    : '// No params to update';

  return {
    nodeName,
    originalParams: params,
    paramsForQuery: collectParameters(
      paramsForQuery,
      fromNode.paramsForQuery,
      toNode.paramsForQuery,
    ),
    mergeQuery: `
      ${fromNode.mergeQuery}
      ${toNode.mergeQuery}
      MERGE (${fromNode.nodeName})-[${nodeName}:${relationName}]->(${toNode.nodeName})
      ${updateStatement}
    `,
  };
}
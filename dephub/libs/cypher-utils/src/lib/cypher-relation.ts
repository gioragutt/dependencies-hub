import { HasCreateQuery, prepareParamsForCreateQuery } from './create-query';
import { CypherNode } from './cypher-node';
import { newNodeId } from './utils';

export interface CypherRelation extends HasCreateQuery {
  nodeName: string;
  paramsForCreateQuery: Record<string, any>;
}

export function relation(
  relationName: string,
  fromNode: CypherNode,
  toNode: CypherNode,
  params?: Record<string, any>,
): CypherRelation {
  const nodeName = `${relationName.toLowerCase()}_${newNodeId(relationName)}`;
  const { paramsForCreateQuery, paramsInQueryString } = prepareParamsForCreateQuery(nodeName, params);

  return {
    nodeName,
    paramsForCreateQuery,
    createQuery: `(${fromNode.nodeName})-[${nodeName}:${relationName}${paramsInQueryString}]->(${toNode.nodeName})`,
  };
}
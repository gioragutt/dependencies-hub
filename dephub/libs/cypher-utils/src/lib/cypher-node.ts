import { HasCreateQuery, prepareParamsForCreateQuery } from './create-query';
import { Params, newNodeId } from './utils';

export interface CypherNode extends HasCreateQuery {
  readonly nodeName: string;
  readonly label: string;
}

export function cypherNode(label: string, params: Params): CypherNode {
  const nodeName = `${label.toLowerCase()}_${newNodeId(label)}`;
  const { paramsForCreateQuery, paramsInQueryString } = prepareParamsForCreateQuery(nodeName, params);

  const createQuery = `(${nodeName}:${label}${paramsInQueryString})`;

  return {
    nodeName,
    label,
    paramsForCreateQuery,
    createQuery,
  };
}

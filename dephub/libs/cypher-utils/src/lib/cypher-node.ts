import { HasMergeQuery, prepareParamsForCreateQuery } from './merge-query';
import { Params, newNodeId } from './utils';

export interface CypherNode<P extends Params> extends HasMergeQuery<P> {
  readonly nodeName: string;
  readonly label: string;
}

export function cypherNode<P extends Params>(label: string, params?: P): CypherNode<P> {
  const nodeName = `${label.toLowerCase()}_${newNodeId(label)}`;
  const { paramsForQuery, paramsInQueryString } = prepareParamsForCreateQuery(nodeName, params);

  const createQuery = `(${nodeName}:${label}${paramsInQueryString})`;

  return {
    nodeName,
    label,
    paramsForQuery,
    mergeQuery: `MERGE ${createQuery}`,
    originalParams: params,
  };
}

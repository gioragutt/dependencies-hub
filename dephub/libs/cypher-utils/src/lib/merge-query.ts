import { Params } from './utils';

export interface HasMergeQuery<P extends Params> {
  readonly mergeQuery: string;
  readonly paramsForQuery: Params;
  readonly originalParams?: P;
}

export interface ParamsForMergeQuery {
  paramsInQueryString: string;
  paramsForQuery: Params;
}

export function prepareParamsForCreateQuery<P extends Params | undefined>(nodeName: string, params: P): ParamsForMergeQuery {
  if (!params || Object.keys(params).length === 0) {
    return {
      paramsInQueryString: '',
      paramsForQuery: {},
    };
  }

  const paramNames = Object.keys(params).reduce((acc, key) => {
    acc[key as keyof P] = `${nodeName}_${key}_param`;
    return acc;
  }, {} as Record<keyof P, string>);

  const paramsInQueryString = Object.entries(paramNames)
    .map(([param, paramName]) => `${param}: $${paramName}`)
    .join(',\n    ');

  const paramsForQuery = Object.entries(params).reduce((acc, [param, value]) => {
    acc[paramNames[param]] = value;
    return acc;
  }, {});

  return {
    paramsInQueryString: ` {
    ${paramsInQueryString}
  }`,
    paramsForQuery,
  };
};

export function mapToMergeQueries<T extends HasMergeQuery<any>>(nodes: T | Map<any, T> | T[]): string[] {
  if (Array.isArray(nodes)) {
    return nodes.map(n => `MERGE ${n.mergeQuery}`);
  }
  if (nodes instanceof Map) {
    return mapToMergeQueries([...nodes.values()]);
  }
  return mapToMergeQueries([nodes]);
}

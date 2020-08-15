import { Params } from './utils';

export interface HasCreateQuery {
  readonly createQuery: string;
  readonly paramsForCreateQuery: Params;
}

export interface ParamsForCreateQuery {
  paramsInQueryString: string;
  paramsForCreateQuery: Params;
}

export function prepareParamsForCreateQuery(nodeName: string, params: Params = {}): ParamsForCreateQuery {
  const paramNames = Object.keys(params).reduce((acc, key) => {
    acc[key] = `${nodeName}_${key}_param`;
    return acc;
  }, {});

  const paramsInQueryString = Object.entries(paramNames)
    .map(([param, paramName]) => `${param}: $${paramName}`)
    .join(',\n    ');

  const paramsForCreateQuery = Object.entries(params).reduce((acc, [param, value]) => {
    acc[paramNames[param]] = value;
    return acc;
  }, {});

  return {
    paramsInQueryString: Object.keys(params).length ? ` {
    ${paramsInQueryString}
  }` : '',
    paramsForCreateQuery,
  };
};

export function mapToCreateQueries<T extends HasCreateQuery>(map: Map<any, T>): string {
  return [...map.values()].map(n => n.createQuery).join(',\n\n  ');
}

import { HasCreateQuery } from './create-query';

export type Params = Record<string, any>;

const generatedIds: Record<string, number> = {};

export const newNodeId = (namespace: string): number => {
  generatedIds[namespace] = generatedIds[namespace] || 0;
  return generatedIds[namespace]++;
};

export function convertParams(nodeName: string, params: Params = {}): { paramsInQueryString: string, paramsForQuery: Params } {
  const paramNames = Object.keys(params).reduce((acc, key) => {
    acc[key] = `${nodeName}_${key}_param`;
    return acc;
  }, {});

  const paramsInQueryString = Object.entries(paramNames)
    .map(([param, paramName]) => `${param}: $${paramName}`)
    .join(', ');

  const paramsForQuery = Object.entries(params).reduce((acc, [param, value]) => {
    acc[paramNames[param]] = value;
    return acc;
  }, {});

  return {
    paramsInQueryString: `{ ${paramsInQueryString} }`,
    paramsForQuery,
  };
};

export function toMapFrom<T, N>(items: T[], toNode: (item: T) => N): Map<T, N> {
  return new Map(items.map(item => [item, toNode(item)]));
}

export function collectParameters(...nodes: (HasCreateQuery | Map<any, HasCreateQuery>)[]): Params {
  return nodes.reduce((acc, node) => {
    if (node instanceof Map) {
      return { ...acc, ...collectParameters(...node.values()) };
    }
    return { ...acc, ...node.paramsForCreateQuery };
  }, {});
}
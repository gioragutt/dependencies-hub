export type Params = Record<string, any>;

const generatedIds: Record<string, number> = {};

export const newNodeId = (namespace: string): number => {
  generatedIds[namespace] = generatedIds[namespace] || 0;
  return generatedIds[namespace]++;
};

export function toMapFrom<T, N>(items: T[], toNode: (item: T) => N): Map<T, N> {
  return new Map(items.map(item => [item, toNode(item)]));
}

export function collectParameters(...params: Params[]): Params {
  return Object.assign({}, ...params);
}
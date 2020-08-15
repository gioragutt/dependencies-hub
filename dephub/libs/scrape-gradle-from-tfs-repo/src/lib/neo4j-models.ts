export interface ModuleNode {
  name: string;
}

export interface RepositoryNode {
  name: string;
}

export interface ModuleVersionNode {
  name: string;
  version: string;
  gitVersion?: string;
  gitVersionType?: string;
}

export interface ResidesInRelation {
  pathInRepo: string;
}

export type VersionOfRelation = {};

export interface DependsOnLibraryRelation {
  dependencyType: string;
}
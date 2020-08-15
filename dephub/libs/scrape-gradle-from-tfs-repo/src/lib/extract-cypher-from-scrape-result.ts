import { cypherNode, CypherNode, cypherRelation, CypherRelation, toMapFrom } from "@dephub/cypher-utils";
import { DependsOnLibraryRelation, ModuleNode, ModuleVersionNode, RepositoryNode, ResidesInRelation, VersionOfRelation } from "./neo4j-models";
import { Dependency, Module } from './scraped-data-models';

export type ModuleToNode<P> = Map<Module, CypherNode<P>>;
export type ModuleToRelation<P> = Map<Module, CypherRelation<P>>;

export function moduleNodes(modules: Module[]) {
  return toMapFrom(modules, m => cypherNode<ModuleNode>('Module', { name: m.moduleName }));
}

export function residesInRelations(
  modules: Module[],
  moduleNodes: ModuleToNode<ModuleNode>,
  repoNode: CypherNode<RepositoryNode>,
): ModuleToRelation<ResidesInRelation> {
  return toMapFrom(modules, m => {
    const moduleNode = moduleNodes.get(m);
    return cypherRelation<ResidesInRelation>('RESIDES_IN', moduleNode, repoNode, {
      pathInRepo: m.pathInRepo,
    });
  });
}

export function versionOfRelations(
  modules: Module[],
  moduleNodes: ModuleToNode<ModuleNode>,
  moduleVersionNodes: ModuleToNode<ModuleVersionNode>,
): ModuleToRelation<VersionOfRelation> {
  return toMapFrom(modules, m => {
    const moduleNode = moduleNodes.get(m);
    const moduleVersionNode = moduleVersionNodes.get(m);
    return cypherRelation<VersionOfRelation>('VERSION_OF', moduleVersionNode, moduleNode);
  });
}

export function moduleVersionNodes(
  modules: Module[],
  gitVersion: string,
  gitVersionType: string,
): ModuleToNode<ModuleVersionNode> {
  return toMapFrom(modules, m => cypherNode<ModuleVersionNode>('ModuleVersion', {
    name: m.moduleName,
    version: m.version,
    gitVersion,
    gitVersionType,
  }));
}

export function dependenciesModuleNodes(dependencies: Dependency[]): Map<Dependency, CypherNode<ModuleNode>> {
  return toMapFrom(dependencies, d => cypherNode('Module', {
    name: d.moduleName,
  }));
}

export function dependenciesModuleVersionNodes(dependencies: Dependency[]): Map<Dependency, CypherNode<ModuleVersionNode>> {
  return toMapFrom(dependencies, d => cypherNode('ModuleVersion', {
    name: d.moduleName,
    version: d.version,
  }));
}

export function dependsOnLibrariesRelations(
  modules: Module[],
  moduleVersionNodes: ModuleToNode<ModuleVersionNode>,
  dependencyModuleVersionNodes: Map<Dependency, CypherNode<ModuleVersionNode>>,
): CypherRelation<DependsOnLibraryRelation>[] {
  const moduleToDependencies = modules.flatMap(m => m.dependencies.map(d => [m, d] as const));
  return moduleToDependencies.map(([module, dependency]) => {

    const moduleVersionNode = moduleVersionNodes.get(module);

    const dependencyModuleVersionNode = dependencyModuleVersionNodes.get(dependency);

    return cypherRelation<DependsOnLibraryRelation>(
      'DEPENDS_ON_LIBRARY',
      moduleVersionNode,
      dependencyModuleVersionNode,
      {
        dependencyType: dependency.dependencyType,
      },
    );
  });
}
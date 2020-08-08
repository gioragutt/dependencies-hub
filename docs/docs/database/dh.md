---
id: dh
title: Dependencies Hub Database Design
sidebar_label: DH Database
---

## Nodes

### Module

Represents a module that can be either a service or a library.

Has a `build.gradle` file

```cypher
CREATE (m:Module { name: "string" })
```

### ModuleVersion

Represents a version of a module.
* For libraries, this represents a version of the library itself.
* For services, this represents a docker image of the service

```cypher
CREATE (mv:ModuleVersion {
  version: "0.1.0",
  gitVersion: "master",
  gitVersionType: "branch"
})
```

The `gitVersion` and `gitVersionType` refer to the `VersionDescriptor` params of the [`TFS Git Rest Api`][tfs-rest-api-params]

### Repository

Represents a git repository that contains services and libraries

```cypher
CREATE (r:Repository { ... })
```

## Relations

### DEPENDS_ON_LIBRARY

Between [ModuleVersion](#moduleversion) and [ModuleVersion](#moduleversion).

```cypher
CREATE (mv1)-[:DEPENDS_ON_LIBRARY {
  type: "compile/implementation/api/etc..."
}]->(mv2)
```

:::info
Modules that have version that have `:DEPENDS_ON_LIBRARY` relations connected to them are libraries.
:::

### VERSION_OF

Between [ModuleVersion](#moduleversion) and [Module](#module)

```cypher
CREATE (mv)-[:VERSION_OF]->(m)
```

### RESIDES_IN

Between [Module](#module) and [Repository](#repository)

```cypher
CREATE (m)-[:RESIDES_IN { 
  path: "/path/to/module"
}]->(r)
```

[tfs-rest-api-params]: https://docs.microsoft.com/en-us/rest/api/azure/devops/git/items/get?view=azure-devops-rest-5.0#uri-parameters
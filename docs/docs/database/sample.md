---
id: sample
title: Sample Data
sidebar_label: Sample Data
---

Here is a sample cypher query which you can use to populate your database:

```cypher
CREATE
  (dhs:Module { name: "dh-service" }),
  (dhrest:Module { name: "dh-rest" }),

  (dhschemas:Module { name: "dh-schemas" }),
  (n4j:Module { name: "neo4j" }),
  (express:Module { name: "express" }),
  (tfsapi:Module { name: "tfs-api" }),
  (nodefetch:Module { name: "node-fetch" }),

  (dhs1:ModuleVersion { version: "1.0.0", name: "dh-service" }),
  (dhrest1:ModuleVersion { version: "1.0.0", name: "dh-rest" }),
  
  (dhschemas1:ModuleVersion { version: "1.0.0", name: "dh-schemas" }),
  (n4j1:ModuleVersion { version: "1.0.0", name: "neo4j" }),
  (express1:ModuleVersion { version: "1.0.0", name: "express" }),
  (tfsapi1:ModuleVersion { version: "1.0.0", name: "tfs-api" }),
  (nodefetch1:ModuleVersion { version: "1.0.0", name: "node-fetch" }),
  
  (dhrepo:Repository { name: "DependenciesHub" }),

  (dhs1)-[:VERSION_OF]->(dhs),
  (dhrest1)-[:VERSION_OF]->(dhrest),

  (dhschemas1)-[:VERSION_OF]->(dhschemas),
  (n4j1)-[:VERSION_OF]->(n4j),
  (express1)-[:VERSION_OF]->(express),
  (tfsapi1)-[:VERSION_OF]->(tfsapi),
  (nodefetch1)-[:VERSION_OF]->(nodefetch),

  (dhs)-[:RESIDES_IN { path: "/service" }]->(dhrepo),
  (dhrest)-[:RESIDES_IN { path: "/rest" }]->(dhrepo),
  (dhschemas)-[:RESIDES_IN { path: "/schemas" }]->(dhrepo),

  (dhs1)-[:DEPENDS_ON_LIBRARY]->(dhschemas1),
  (dhs1)-[:DEPENDS_ON_LIBRARY]->(n4j1),
  (dhs1)-[:DEPENDS_ON_LIBRARY]->(tfsapi1),
  (dhs1)-[:DEPENDS_ON_LIBRARY]->(nodefetch1),

  (dhrest1)-[:DEPENDS_ON_LIBRARY]->(dhschemas1),
  (dhrest1)-[:DEPENDS_ON_LIBRARY]->(n4j1),
  (dhrest1)-[:DEPENDS_ON_LIBRARY]->(express1),

  // Just to show that libraries can depend on libraries
  (dhschemas1)-[:DEPENDS_ON_LIBRARY]->(n4j1)
```

## Queries

* Find all services and libraries that depend on the `neo4j` library

```cypher
MATCH (lib:Module {name: "neo4j})<-[:VERSION_OF]-(:ModuleVersion)<-[:DEPENDS_ON_LIBRARY]-()-[:VERSION_OF]->(s)
RETURN s;
```

* Find all dependencies on libraries

```cypher
MATCH (lib:Module)<-[:VERSION_OF]-(:ModuleVersion)<-[:DEPENDS_ON_LIBRARY]-()-[:VERSION_OF]->(s)
RETURN s.name, collect(lib.name);
```

* List all repositories, and services and libraries that reside inside them

```cypher
MATCH 
	(r:Repository)<-[rel:RESIDES_IN]-(m) 
RETURN 
	r.name as repo, rel.path as path, m.name as module
```

* List all modules, specifying if each module is a service or library

```cypher
MATCH
  (m:Module)
OPTIONAL MATCH
  (dep:Module)<-[:VERSION_OF]-(:ModuleVersion)-[:DEPENDS_ON_LIBRARY]->(:ModuleVersion)-[:VERSION_OF]->(m)
WITH 
  m, count(dep) > 0 as isLibrary
RETURN 
  m.name, isLibrary
```

* List all modules and their repositories

```cypher
MATCH (m:Module)
OPTIONAL MATCH (m)-[rel:RESIDES_IN]->(repo:Repository)
RETURN m.name as module, repo.name as repo, rel.path as path
```

## Utils

* Clear all

```cypher
MATCH (n) DETACH DELETE n
```

* History: `:history`
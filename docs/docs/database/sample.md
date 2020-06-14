---
id: sample
title: Sample Data
sidebar_label: Sample Data
---

Here is a sample cypher query which you can use to populate your database:

```cypher

CREATE
  (dhs:Service { name: "Dependencies Hub Service" }),
  (dhrest:Service { name: "Dependencies Hub Rest Api" }),

  (dhschemas:Library { name: "Dependencies Hub Schemas" }),
  (n4j:Library { name: "neo4j" }),
  (express:Library { name: "express" }),
  (tfsapi:Library { name: "tfs-api" }),
  (nodefetch:Library { name: "node-fetch" }),

  (dhs1:ServiceVersion { version: "1.0.0" }),
  (dhrest1:ServiceVersion { version: "1.0.0" }),
  
  (dhschemas1:LibraryVersion { version: "1.0.0" }),
  (n4j1:LibraryVersion { version: "1.0.0" }),
  (express1:LibraryVersion { version: "1.0.0" }),
  (tfsapi1:LibraryVersion { version: "1.0.0" }),
  (nodefetch1:LibraryVersion { version: "1.0.0" }),
  
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

  (dhs1)-[:DEPENDS_ON]->(dhschemas1),
  (dhs1)-[:DEPENDS_ON]->(n4j1),
  (dhs1)-[:DEPENDS_ON]->(tfsapi1),
  (dhs1)-[:DEPENDS_ON]->(nodefetch1),

  (dhrest1)-[:DEPENDS_ON]->(dhschemas1),
  (dhrest1)-[:DEPENDS_ON]->(n4j1),
  (dhrest1)-[:DEPENDS_ON]->(express1),

  // Just to show that libraries can depend on libraries
  (dhschemas1)-[:DEPENDS_ON]->(n4j1),
```

## Queries

* Find all services and libraries that depend on the `neo4j` library

```cypher
MATCH (l:Library)<-[:VERSION_OF]-(:LibraryVersion)<-[:DEPENDS_ON]-()-[:VERSION_OF]->(s)
WHERE l.name = "neo4j"
RETURN s;
```

* Find all dependencies on libraries

```cypher
MATCH (l:Library)<-[:VERSION_OF]-(:LibraryVersion)<-[:DEPENDS_ON]-()-[:VERSION_OF]->(s)
RETURN s, l;
```

* Find all services and the libraries they depend on

```cypher
MATCH (l:Library)<-[:VERSION_OF]-(:LibraryVersion)<-[:DEPENDS_ON]-(:ServiceVersion)-[:VERSION_OF]->(s:Service)
RETURN s, l;
```

* List all repositories, and services and libraries that reside inside them

```cypher
MATCH 
	(r:Repository)<-[rel:RESIDES_IN]-(s) 
RETURN 
	r.name as Repository, s.name as Module, rel.path as Path
```

## Utils

* Clear all

```cypher
MATCH (n) DETACH DELETE n
```

* History: `:history`
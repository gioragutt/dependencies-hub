---
id: dh
title: Dependencies Hub Database Design
sidebar_label: DH Database
---

## Nodes

### Service

Represents a module that (probably) represents a service, has a `build.gradle`.

```cypher
CREATE (s:Service { name: "string" })
```

### Library

Represents a module that is a library, that can be depended on by other services or libraries.

```cypher
CREATE (l:Library { name: "string" })
```

### ServiceVersion

Represents a versioned snapshot of a service

```cypher
CREATE (sv:ServiceVersion { version: "string" })
```

### LibraryVersion

Represents a certain version of a library that may be depended upon by other services or libraries.

```cypher
CREATE (lv:LibraryVersion { version: "string" })
```

### Repository

Represents a git repository that contains services and libraries

```cypher
CREATE (r:Repository { ... })
```

## Relations

### DEPENDS_ON

Between [ServiceVersion](#serviceversion) and [LibraryVersion](#libraryversion)

```cypher
CREATE (sv)-[:DEPENDS_ON]->(lv)
```

Between [LibraryVersion](#libraryversion) and [LibraryVersion](#libraryversion)

```cypher
CREATE (lv1)-[:DEPENDS_ON]->(lv2)
```

### VERSION_OF

Between [ServiceVersion](#serviceversion) and [Service](#service)

```cypher
CREATE (sv)-[:VERSION_OF]->(s)
```

Between [LibraryVersion](#libraryversion) and [Library](#library)

```cypher
CREATE (lv)-[:VERSION_OF]->(l)
```

### RESIDES_IN

Between [Service](#service) and [Repository](#repository)

```cypher
CREATE (s)-[:RESIDES_IN { path: "/path/to/module" }]->(r)
```

Between [Library](#library) and [Repository](#repository)

```cypher
CREATE (l)-[:RESIDES_IN { path: "/path/to/module" }]->(r)
```
---
id: neo4j
title: Neo4j and Cypher
sidebar_label: Neo4j and Cypher
---

The database we'll be using is [Neo4j](https://neo4j.com/).

Neo4j is a graph database. It saves data as nodes and relations between them.

Each node and each relation between node can contain properties.

Interaction with Neo4j is done with the [Cypher](https://neo4j.com/developer/cypher-basics-i/) query language.

## Run locally

```bash
docker run \                                           
    -p 7474:7474 \
    -p 7687:7687 \
    --volume /tmp/neo4j/data:/data \
    --env NEO4J_AUTH=none
    -d \
    neo4j:4.0.5
```

Go to [http://localhost:7474/browser/](http://localhost:7474/browser/).

More information about the neo4j image can be found [here](https://hub.docker.com/_/neo4j).

## Examples

Here are a couple examples of Cypher:

### Create a Person node

```cypher
CREATE (p:Person { name: "Emil", from: "Sweden", klout: 99 })
```

Here, we create a `Person` node (assigned to the `p` variable for that query), with several properties.

### Query a node

```cypher
MATCH (p:Person) WHERE p.name = "Emil" RETURN p;
```

Here, we query (using the `MATCH` keyword) for the same node we created before.

### Create relations

```cypher
// Search for Emil, assign to the ee variable

MATCH (ee:Person) WHERE ee.name = "Emil"

CREATE

// Create a bunch of people

  (js:Person { name: "Johan", from: "Sweden", learn: "surfing" }),
  (ir:Person { name: "Ian", from: "England", title: "author" }),
  (rvb:Person { name: "Rik", from: "Belgium", pet: "Orval" }),
  (ally:Person { name: "Allison", from: "California", hobby: "surfing" }),
  
// Create some relations. they can have properties just like nodes

  (ee)-[:KNOWS {since: 2001}]->(js),
  (ee)-[:KNOWS {rating: 5}]->(ir),

  (js)-[:KNOWS]->(ir),
  (js)-[:KNOWS]->(rvb),
  (ir)-[:KNOWS]->(js),
  (ir)-[:KNOWS]->(ally),
  (rvb)-[:KNOWS]->(ally)
```

Here, we create several nodes and relations, each can have (or not have) properties.

### Query with relations

```cypher
MATCH (ee:Person)-[:KNOWS]-(friends)
WHERE ee.name = "Emil" RETURN ee, friends
```

### More complex query

```cypher
MATCH (js:Person)-[:KNOWS]-()-[:KNOWS]-(surfer)
WHERE js.name = "Johan" AND surfer.hobby = "surfing"
RETURN DISTINCT surfer
```

Here, we query for someone (`surfer`) that knows someone that knows `Johan`,
and that `surfer`'s `hobby` property value is `"surfing"`.
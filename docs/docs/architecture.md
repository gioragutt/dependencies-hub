---
id: architecture
title: Architecture
sidebar_label: Architecture
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Components

### DH Service

A background service that will scrape the data sources (TFS and Artifactory) when triggered.

The scraped data will be sent to the database

### Database

Will save the data in the system. Was initially done with [Postgresql](https://www.postgresql.org/), but moving to [Neo4j](https://neo4j.com/) for learning purposes,
and because a graph database makes sense for dealing with dependencies.

### Rest API

A Rest API service that will provide access to the data in the Neo4j database.

The RestAPI should expose the data for all consumers, but specifically should do it well
for the Web App, and Libraries CI Pipelines

### Web Application

It will allow users to query the database, looking for libraries, services and relationships between them.

### Libraries CI Pipelines

Not part of the project itself, but worth mentioning that DH should empower CI pipelines for libraries.

## Diagram

<img alt="Dependencies Hub Architecture" src={useBaseUrl('img/architecture.svg')} style={{backgroundColor: 'white'}} />

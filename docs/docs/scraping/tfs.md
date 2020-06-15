---
id: tfs
title: Scraping TFS
sidebar_label: TFS
---

In TFS we can find all of our repositories, which will hold our services and (in-house or forked) libraries.

## Files that we're interested in scraping

### `build.gradle`

Contains the following properties about each module:

#### `group`

Tells us the [`groupId`][libraryproperties] of libraries

#### `version`

Tells us the [`version`][libraryproperties] of libraries

#### `dependencies`

Tells us about our library dependencies.
Each dependency has the following properties:

|Property|Meaning|
|:-:|:-:|
|`group`|The `groupId` of the library|
|`name`|The `artifactId` of the library|
|`version`|The `version` of the library|
|`type`|What type of dependency is used ([gradle configuration name])|

The `type` property will be used in the [`:DEPENDS_ON`](../database/dh.md#depends_on) relations.

### `settings.gradle`

Currently, the only property exposed by `settings.gradle` in (most) modules is `rootProject.name`.
Some modules have several `include project` statements, in cases where it's the root of a multi-module project.

The `rootProject.name` property relates to the [`artifactId`][libraryproperties] of the library, or the name of the service.

[libraryproperties]: ./artifactory.md#libraryproperties
[gradle configuration name]: https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph
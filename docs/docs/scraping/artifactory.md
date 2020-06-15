---
id: artifactory
title: Scraping Artifactory
sidebar_label: Artifactory
---

## What's in artifactory?

Artifactory has all the libraries and versions.

## Library Properties

* groupId: `org.company-name`
* artifactId: `schemas`
* version: `0.13.0_some_tmp_version1`

## Other properties that might be taken about libraries:

* Date library was published
* Who was the publisher (although we use integ for everything 🤦🏻‍♂️)

## Thoughts

* Should we scrape everything, or just what we see in `build.gradle`s?
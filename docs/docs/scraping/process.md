---
id: process
title: The Scraping Process
sidebar_title: Scraping Process
---

Consider the database starts empty...

What triggers are there to populate the database, and what data is scraped for each trigger?

## Triggers

First, there are git triggers:

* Pushes (to master branch)
* Tags (library/service releases)

Further more, there can be any number of triggers we create, such as:

* Cron Jobs (nightly scrapes, etc)
* Manually scrape a certain branch on user request, etc.

## Scrape Scope

Each of the triggers described above may collect different amounts of data.

There could be a full scrape, that would scrape all repositories, and in every repository it would scrape all tags, and so on.

On the other hand, there could be smaller scrapes that scrape a single branch/tag.

Summerizing, it seems that there are two types of scrapes:

### Single Commit Scrape

A scrape that spans just one commit, be it a branch or a tag. It will insert the `LibraryVersion/ServiceVersion`s of scraped modules, and any `:DEPENDS_ON` relationships related to that version.

Except for the master branch scrape, which will override previous data, commit scrapes should be idempotent: when run several times, there should be no duplicate date in the database.

### Full Scrape

Scrape all repositories, and within those, all tags, and the master branch (unless configured otherwise).

This can be triggered nightly, or even more frequently, depending on how lengthy the process will be.

Basically it means running the `Single Commit Scrape` for many many commits.

## Flow of a scrape
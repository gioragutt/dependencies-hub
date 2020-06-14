---
id: motivation
title: Motivation
sidebar_label: Motivation
---

We've moved to Java development around the end of 2018.

I don't know all the considerations for doing it the way we did, but we moved from a mono-repo C++ repository, to a multi-repo setup.

Older C++ modules were kept in a trimmed down C++ only repository, for reasons 🤷🏻‍♂️.

Before long, we had over a dozen java libraries shared between teams.

Some of them were wrappers around services we use (such as Kafka), some were client libraries for rest-apis, and the majority of them were schema libraries (Avro).

Needless to say, after being about two years into this architecture, managing library dependencies is a pain in the ass.

## Upgrade process

One of the biggest pain points about managing java libraries, more so in a multi-repo setup, is keeping projects up to date when releasing new versions.

In the earlier days of the project, we'd sit together as a team, and plan, using a whiteboard, what libraries and services do we need to release for the next version.

| Name | Current Version | Next Version |
| :---: | :---: | :---: |
| schema-lib1 | 0.3.0 | 0.4.0 |
| schema-lib2 | 0.2.0 | 0.3.0 |
| client-lib1 | ... | ... |
| infra-lib1 | ... | ... |
| service1 | ... | ... |
| service2 | ... | ... |

For every line in the table, we'd have to figure out what library/service dependends on it, and iteratively release new library and service versions.

This was _borderline_ acceptable when there weren't too many services. Like any project, things began growing, there were more services spawning, more libraries, etc.

This process became hell.

### Solution: `increment_library_middle_version.sh`

This is the script that we use until today to update library versions across projects and repositories.

It works by cloning _all_ of our repositories (the first time), reseting to master (every time), and scanning `build.gradle` files to find dependents of the library.

You first pick a library, release a new version, and then get prompted to pick which projects you want to upgrade.

For each project picked, a commit that updates the build.gradle file is pushed to a branch, and a PR is created.

Although this has helped us a lot, often you have to review and merge dozens of PRs, which is still a process which can go sideways, very easily.

Keep in mind, that this is done by many teams, across many shared repositories 😵.

### Real motivation: as much automation and insight as possible!

I want to create our version of github's `dependabot`!

I envision not having to run a single script.

All you'll have to do to release a new version of the library, would be to go to `Jenkins`, go to the `Release Library` job for your library, and let jenkins do the job.

It would:

* Build a temporary library
* For each dependent library/process, run a CI pipeline for the dependent, with the temporary library version
* Based on the outcome, you could decide wether to continue with the release or not, and whether the version is a minor or major
* If you decide to continue with the release (nothing breaks, or breaks but intentionally), PRs are created for all dependants.

All while visualizing the process and acting automatically based on data about dependency relationships from our repositories.
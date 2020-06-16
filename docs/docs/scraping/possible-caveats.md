---
id: possible-caveats
title: Possible Caveats
sidebar_label: Possible Caveats
---
:::note
What happens when we push the code of a library, but it is still not published to artifactory? (F.E new library WIP commits)
:::

Do we have a way to know if a module is a library, other than finding it in artifactory?

If not, does it start as a `Service` node, and later migrate into a `Library` node?

And if we do, what would be the process of updating the node?

---

:::note
How do we handle `compile project(':...')` cases?
:::

We can find the references project by search for a module with the same `rootProject.name` as the references module.

---

:::note
How do we handle scraping errors? 
:::

There have beeen several modules where their `build.gradle` was pretty shitty, and contained stuff in the `dependencies` block which it should not have.

This caused the parsed `build.gradle` object to contain weird stuff. We need a mechanism for handling parsing or validation errors.

_Possible Solution:_ when such an event occurs, send out an event (probably means we'll have a MQ) which would be registed in a database. There'll probably be a "backoffice" part of the service that will allow users to see such errors, and retrigger scrapes after they failed. Kinda sounds like `jenkins` but... nope 🙃.
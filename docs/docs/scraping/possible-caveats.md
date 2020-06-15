---
id: possible-caveats
title: Possible Caveats
sidebar_label: Possible Caveats
---

What happens when we push the code of a library, but it is still not published to artifactory? (F.E new library WIP commits)

Do we have a way to know if a module is a library, other than finding it in artifactory?

If not, does it start as a `Service` node, and later migrate into a `Library` node?

And if we do, what would be the process of updating the node?

---

How do we handle `compile project(':...')` cases?
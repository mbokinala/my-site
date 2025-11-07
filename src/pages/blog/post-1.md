---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'updatedAt in Convex'
pubDate: 2025-11-07
description: "How"
tags: ["convex"]
---

I'm a huge fan of [Convex](https://www.convex.dev), an all-in-one reactive database and backend platform that makes writing performant realtime apps incredibly easy. I have very few complaints about the product except for one: there's a native `_creationTime` field on all documents, but no `_updatedAt`. Luckily, the Convex team has built a ton of handy helpers that make adding this functionality a breeze.

*Note: this tutorial assumes you're already using Convex and want to add an `updatedAt` field to existing or new tables. A complete beginner's guide to Convex is coming soon!*

To add an `updatedAt` field to our documents, we'll be using the super handy database trigger helper that ships with the Convex team's [`convex-helpers` package](https://github.com/get-convex/convex-helpers).

Database triggers in Convex work by wrapping the default mutation function (using [another handy helper](https://github.com/get-convex/convex-helpers/blob/main/packages/convex-helpers/README.md#custom-functions)) in some additional custom logic.

In our case, we'll create a custom mutation that updates the `updatedAt` field of a document whenever a document is inserted or patched.

## Setup

Install the convex helpers package with the following command:

```sh
npm i convex-helpers@latest
```

Then, in `convex/functions.ts`:

```ts
// convex/functions.ts
/* eslint-disable no-restricted-imports */
import { mutation as rawMutation, internalMutation as rawInternalMutation } from "./_generated/server";
/* eslint-enable no-restricted-imports */
import { DataModel } from "./_generated/dataModel";
import { Triggers } from "convex-helpers/server/triggers";
import { customCtx, customMutation } from "convex-helpers/server/customFunctions";

// start using Triggers, with table types from schema.ts
const triggers = new Triggers<DataModel>();

triggers.register("<tableName>", async (ctx, change) => {
    if (change.newDoc) {
        // Only update if it's an insert or update operation
        if (change.operation === "insert" || change.operation === "update") {
            await ctx.db.patch(change.id, { updatedAt: Date.now() });
        }
    }
});

// create wrappers that replace the built-in `mutation` and `internalMutation`
// the wrappers override `ctx` so that `ctx.db.insert`, `ctx.db.patch`, etc. run registered trigger functions
export const mutation = customMutation(rawMutation, customCtx(triggers.wrapDB));
export const internalMutation = customMutation(rawInternalMutation, customCtx(triggers.wrapDB));
```
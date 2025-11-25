---
title: "Say Goodbye to Full Refreshes: Introducing Non-Destructive Incremental Sync"
description: "We are thrilled to announce a major upgrade to the Saddle Data engine. You can now move just the data that changed, saving you time, money, and headaches."
image: "/images/pexels-anna-nekrashevich-6801648.jpg"
date: 2025-11-24T09:00:00Z
draft: false
---

If you've ever run a `DROP TABLE` followed by a `CREATE TABLE` on a production dataset with 10 million rows, you know the feeling. The anxiety. The resource spike. The long wait.

For a long time, simple ELT pipelines relied on the "Full Refresh" method: wipe the destination clean and copy everything from scratch. It's safe, it's easy to build, and it guarantees data consistency. But it doesn't scale.

As your data grows, Full Refreshes become too slow and too expensive.

**Today, we are thrilled to announce a major upgrade to the Saddle Data engine. We are rolling out Non-Destructive Incremental Sync for our core database connectors.**

You can now move just the data that changed, saving you time, money, and headaches.

## The New Sync Modes

We've introduced two powerful new ways to sync your data.

### 1. Incremental Append (The Log Collector)

**Best for:** Immutable data like event logs, page views, or audit trails.

In this mode, Saddle Data remembers where it left off. You select a **Cursor Field** (usually a timestamp like `created_at` or an auto-incrementing `id`). When the pipeline runs, we only extract rows where the cursor is greater than the last successful run.

These new rows are simply appended to your destination table. It's lightning-fast and extremely efficient.

### 2. Incremental Deduped (The Gold Standard)

**Best for:** Mutable business data like Users, Orders, or Products.

This is the "magic" mode that most data teams need. It solves the problem of updates.

If a user changes their email address in your source database, a simple "Append" sync would create a duplicate row in your warehouse (one with the old email, one with the new).

With **Incremental Deduped** (also known as Upsert or Merge), we use a **Primary Key** to intelligently merge data.

1.  We fetch the new or updated rows using the cursor.
2.  We load them into a temporary staging area in your warehouse.
3.  We perform an atomic merge operation: new records are inserted, and existing records (matching the Primary Key) are updated.

The result? Your warehouse is an exact, up-to-date mirror of your production database, without the cost of copying the whole thing every night.

## How to Enable It

It's just a few clicks in the Flow Editor.

1. Open an existing Flow or create a new one.
2. Edit the Source config.
3. Change the Sync Mode from "Full Refresh" to "Incremental Deduped" on the table you want to configure.
4. Select your Cursor Field (e.g., updated_at) and Primary Key (e.g., id).
5. Save and Run!

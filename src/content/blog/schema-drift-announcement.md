---
title: "Stop Breaking Pipelines: Introducing Schema Drift Detection & Auto-Migration"
description: "Data teams often live in fear of 'The Monday Morning Break'—when an upstream engineer adds a column, and the downstream pipeline crashes. Saddle Data now solves this with automated Schema Drift Handling."
image: "/images/dogs-4417556_1280.jpg"
date: 2025-11-30T09:00:00Z
draft: false
---

It's a classic story: An application engineer deploys a new feature on Friday afternoon. They add a helpful new column, `user_score`, to the `users` table. The app works perfectly.

But on Monday morning, the Data Team wakes up to a sea of red alerts. The ETL pipeline failed. The analytics dashboard is stale. The CEO is asking why the numbers look wrong.

Why? Because the pipeline didn't expect that new column.

**Today, Saddle Data is ending the fear of schema changes. We are introducing comprehensive Schema Drift Detection and Auto-Migration for PostgreSQL, MySQL, and Cassandra.**

## Control Your Schema Evolution

We know that "one size fits all" doesn't apply to data governance. That's why we're giving you two powerful policies to control how your pipelines react to upstream changes.

### 1. Automatically Update Destination (`allow_all`)

**Best for:** Development environments, rapid prototyping, and agile teams where speed > strict governance.

In this mode, Saddle Data acts as a self-healing system.
*   **Detection:** When our worker detects a new column in your source database...
*   **Action:** It automatically issues an `ALTER TABLE` command to your destination warehouse to add the column.
*   **Result:** The sync continues uninterrupted. Your data warehouse schema evolves in real-time with your production database.

### 2. Pause Pipeline & Notify (`block_on_new_column`)

**Best for:** Production environments, regulated industries, and complex warehouses where schema stability is paramount.

In this mode, Saddle Data acts as a gatekeeper.
*   **Detection:** When a new (or missing) column is detected...
*   **Action:** The pipeline is immediately **Paused**. The run status is marked as `Drift Detected`.
*   **Notification:** An alert is sent to your team: "Schema Drift Detected: New column `user_score` found."
*   **Resolution:** You can log in, review the change in our new **Drift Details** view, and click **"Approve & Sync"**. Saddle Data will then safely migrate the schema and resume the pipeline.

## Robust NoSQL Support

Schema drift isn't just for SQL. We've built this feature with first-class support for **Apache Cassandra**.

Our engine intelligently parses Cassandra's wide-column structure, handles keyspace resolution robustly, and can safely `ALTER` Cassandra tables to accommodate new data fields without downtime.

## Try It Today

This feature is live now for all users.

1.  Go to your **Flow Editor**.
2.  Open the configuration for any Postgres, MySQL, or Cassandra connection.
3.  Look for the **Schema Change Policy** dropdown.
4.  Choose between "Automatically Update" or "Pause Pipeline".

Stop fixing broken pipelines. Start managing your schema evolution.
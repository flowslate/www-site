---
title: Tutorial - Syncing PostgreSQL to Google Sheets in 5 Minutes
description: "Heading example Here is example of hedings. You can use this heading by following markdownify rules."
image: "/images/pexels-digitalbuggu-171198.jpg"
date: 2025-07-18T19:00:00Z
draft: false
---

One of the most common data tasks is getting operational data out of a production database and into a Google Sheet for analysis, reporting, or sharing with non-technical team members. Let's walk through how to build this exact pipeline in Saddle Data in just a few minutes.

## Step 1: Create Your Integrations

- An Integration in Saddle Data is a secure authorization to a third-party service. For this flow, we'll need two.

- PostgreSQL Integration: Navigate to the "Integrations" page and click "Add Integration." Select "PostgreSQL," give it a name like "Production DB," and securely provide your database credentials (host, user, password, etc.).

- Google OAuth Integration: Click "Add Integration" again and select "Google Sheets." You'll be guided through a secure OAuth flow to grant Saddle Data permission to access your Google account. This creates an integration named after your Google email address.

## Step 2: Create Your Connections
A Connection is a specific configuration of an Integration.

- Source Connection: Go to the "Connections" page and click "Add Connection."
  - Name: "Production Users Table"
  - Integration: Select the "Production DB" integration you just created.
  - Type: postgres
  Capability: source

- Destination Connection: Click "Add Connection" again.
  - Name: "Marketing Team Spreadsheet"
  - Integration: Select your Google Account integration.
  - Type: google_sheets
  - Capability: destination
  - Config: Provide the spreadsheet_id of the Google Sheet you want to write to.

## Step 3: Discover Your Source Schema
Before building the flow, let's see what data is available. Click on your "Production Users Table" connection and go to the "Discover" tab. Saddle Data will connect to your database and show you a list of all the tables and columns you have access to.

## Step 4: Create the Flow
1. Now for the final step. Navigate to the "Flows" page and click "Add Flow."
1. Name: "Sync Users to Marketing Sheet"
1. Source Connection: Select "Production Users Table".
1. Destination Connection: Select "Marketing Team Spreadsheet".
1. Schedule: Choose "Manual" for now.
1. Configure Entities:
    - In the "Source" panel, you'll see the schema you just discovered. Select the public.users table and check the boxes for the id, name, and email columns.
    - In the "Destination" panel, for the destination_schema, enter the Spreadsheet ID again. For the destination_name, enter the name of the tab you want to create, like "User Export".

## Step 5: Run It!
Save the flow, and on the Flows dashboard, click the "Run Now" button. In a few moments, your worker service will execute the flow. Open your Google Sheet, and you'll see a new tab named "User Export" populated with the exact data you selected from your PostgreSQL database.

That's it! You've just built a powerful, automated data pipeline without writing a single line of code.

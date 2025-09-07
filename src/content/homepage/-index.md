---


# feature
feature:
  title: Key Features
  features:
    - name: "Connect Anything"
      icon: "/images/code.svg" # Placeholder icon
      content: "Build pipelines between your databases (PostgreSQL), spreadsheets (Google Sheets), and cloud services (AWS)."
    - name: "Visual Flow Builder"
      icon: "/images/oop.svg" # Placeholder icon
      content: "Design your data pipelines on an intuitive visual canvas. See how your data moves from source to destination."
    - name: "Schema Discovery"
      icon: "/images/user-clock.svg" # Placeholder icon
      content: "Automatically discover the tables and columns in your data sources. No more guessing table names."
    - name: "Powerful Transformations"
      icon: "/images/love.svg" # Placeholder icon
      content: "Clean, filter, rename, and reshape your data in-flight before it reaches its destination."
    - name: "Flexible Scheduling"
      icon: "/images/speedometer.svg" # Placeholder icon
      content: "Run your flows on a cron schedule or trigger them on-demand with a single click or API call."
    - name: "Secure Credential Management"
      icon: "/images/cloud.svg" # Placeholder icon
      content: "We use secure OAuth flows and integrate with Google Secret Manager to ensure your database passwords and API keys are never exposed."

# services
services:
  - title: "Our Solution: Saddle Data"
    content: |
      Saddle Data is an intelligent data integration platform that automates the flow of data between your business applications, databases, and data warehouses. Businesses today use dozens of different SaaS tools and databases. Their valuable data is trapped in separate silos, making it impossible to get a complete view of their operations. Building and maintaining the "data plumbing" to connect these systems is complex, time-consuming, and requires dedicated engineering resources.
    images:
      - "/images/service-slide-1.png" # Placeholder image
    button:
      enable: false
      label: "Learn More"

  - title: "Key Differentiators"
    content: "An Intuitive Visual Interface: Unlike competitors who rely on complex forms, our 'slate' makes building and understanding data pipelines easy. Developer Experience as a Feature: We are built API-first. Everything you can do in the UI, you can do with our API. We will have a Terraform provider for managing flows as code. AI-Powered Assistance: We plan to embed AI to help with error resolution, data quality, and intelligent setup."
    images:
      - "/images/service-slide-2.png" # Placeholder image
    button:
      enable: false
      label: "Learn More"

# workflow
workflow:
  title: "Concrete Use Case: Automate Your Cloud Billing"
  image: "/images/banner.png" # Placeholder image
  description: |
    Extract: Automatically pull detailed cost and usage data directly from the AWS Cost Explorer API.
    Transform: Use Saddle Data's transformation engine to filter for specific services (like EC2), select only the relevant cost columns, and rename them to match your billing system's format.
    Load: Push the clean, aggregated cost data directly into your billing platform's API (like Metronome) every night.
    Result: Eliminate hours of manual spreadsheet work and ensure accurate, timely billing.

# call_to_action
call_to_action:
  title: Ready to get started?
  content: Build Intelligent Data Pipelines, Visually.
  image: "/images/cta.png"
  button:
    enable: true
    label: "Sign Up for Free"
    link: "/contact"
---
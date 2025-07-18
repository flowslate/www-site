---
title: Frequently Asked Questions
description: "meta description"
draft: false
faqs:
  - title: What is FlowSlate?
    answer: FlowSlate is an intelligent, cloud-native data integration platform. It allows you to build, manage, and automate data pipelines that connect your various applications, databases, and cloud services. Our visual-first approach makes it easy to see how your data moves, while our developer-centric tools provide the power and flexibility that technical teams need.

  - title: Who is FlowSlate designed for?
    answer: FlowSlate is built primarily for data engineers, analytics engineers, and backend developers who need a powerful and efficient way to manage their organization's data infrastructure. It's also a great fit for technical users in operations, marketing, or finance who need to move beyond the limitations of simpler automation tools and require more control over larger datasets.

  - title: How is FlowSlate different from other tools like Fivetran or Zapier?
    answer: FlowSlate combines the best of both worlds. Like Fivetran, we offer robust, scalable data replication for databases and cloud services. However, we differentiate ourselves with a more intuitive visual interface and a strong focus on developer experience (DX), including a first-class API and future support for managing flows as code.

      Unlike simpler tools like Zapier which are primarily for task automation, FlowSlate is built for larger, more complex data movement and transformation, providing features like schema discovery and data quality monitoring.

  - title: What kind of data sources and destinations do you support?
    answer: We are constantly expanding our library of connectors. Currently, we support PostgreSQL, Google Sheets, and AWS Cost Explorer as sources, with more on the way. Our platform is designed to connect to a wide range of databases, SaaS applications, and data warehouses.

  - title: Can I transform my data with FlowSlate?
    answer: Yes! FlowSlate has a powerful in-flight transformation engine. You can build a series of steps to filter rows, select or rename columns, and reshape your data before it ever reaches its destination. This ensures your data is clean and in the correct format for analysis.

  - title: Does FlowSlate support real-time data movement?
    answer: FlowSlate is designed for flexibility. You can run your data flows on a traditional cron schedule (e.g., every hour) or trigger them on-demand via our API or a "Run Now" button in the UI. This allows for both batch processing and near real-time use cases.

  - title: How does FlowSlate handle sensitive credentials like database passwords and API keys?
    answer: Security is our top priority. We never store your sensitive credentials directly in our application database. When you create a new integration, we use secure methods like OAuth 2.0 for services like Google, and for direct credentials, we immediately encrypt and store them in Google Secret Manager, a secure, dedicated secret storage service. Our platform only ever stores a reference to that secret, ensuring your credentials remain safe.

  - title: Can I control which team members have access to what?
    answer: Yes. FlowSlate is built for teams. Users are organized into organizations, and you can assign roles like "Admin," "Editor," or "Viewer" to control who has permission to create, edit, or just view connections and flows.

  - title: Do you have a free plan?
    answer: Yes, we have a generous free tier that allows you to start building and running data pipelines right away. You can sign up and get started in minutes without a credit card.

  - title: Is there documentation for your API?
    answer: Absolutely. We are an API-first platform. Everything you can do in our UI is also available via our REST API. You can find our comprehensive API documentation at [link to your future docs page].
---

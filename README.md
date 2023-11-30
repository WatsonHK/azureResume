# Watson Resume

Welcome to Watson's Resume

I built this page as part of the Cloud Guru Azure Resume Challenge.

# Prerequisites

- Github account 
- Azure account
- Azure CLI
- .Net Core 6
- Azure Functions Core Tools
- Visual Studio Code
- Visual Code Extensions
    - Azure Functions Extensions
    - C# Extension
    - Azure Storage Extensions

# Frontend resources

The front-end is a static site with HTML, CSS and javascript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function. Host a static website on azure blob storage.

- Javascript
- HTML
- Azure Blob Storage


# Backend resource

The backend is an HTTP triggered Azure Functions with Cosmos DB input and output binding. The function is triggered, it retrieves the Cosmos DB item, add +1 to it, and saves it and returns its value to the caller

- Function Apps
- Cosmos DB 


# Testing Resource

Testing the azure functions and testing in the pipeline before commit

- XUnit.net

# CI/CD Resources

Deploy a blob storage static site wiht GitHub actions. Used in frontend.main.yml

Also, deploy an azure function to azure with GitHub actions. Used in backend.main.yml

Implement XUnit .Net testing in GitHub actions to test the functionality


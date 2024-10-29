# 📦 InventoryAPI Server

## Overview

**InventoryAPI Server** is a backend API built to manage inventory operations efficiently, using modern web technologies. Developed with #TypeScript and based on the **PERN stack** (PostgreSQL, Express, React, and Node.js), the project offers a robust API with extensive documentation via **Swagger**, and includes unit and integration tests implemented with **Jest** and **Supertest**.

This project highlights backend skills in handling databases, testing, API development, and TypeScript-driven development.

## Key Features

- 🛠 **TypeScript**: Ensures type safety and better developer experience.
- 📚 **Comprehensive API Documentation**: Detailed with **Swagger**, enabling users to interact with all API endpoints.
- 📦 **Sequelize ORM**: For seamless interaction with a **PostgreSQL** database.
- ✅ **Testing**: Unit and integration tests implemented using **Jest** and **Supertest** to ensure API reliability.
- ⚡ **Nodemon**: Automatic server restarts during development.
  
## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for handling API routes.
- **TypeScript**: Strong typing system for JavaScript.
- **PostgreSQL**: Relational database.
- **Sequelize**: ORM for PostgreSQL to handle models and queries.
- **Swagger**: API documentation.
- **Jest**: Testing framework for unit and integration tests.
- **Supertest**: HTTP assertions for API testing.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/milagrosniro/inventory_PERN.git
   cd InventoryAPI
   ```

   **Install dependencies**:


```bash

npx sequelize-cli db:migrate
```
Start the development server:

```bash

npm run dev
```
Running Tests
This project includes unit and integration tests using Jest and Supertest to ensure API reliability.

To run all tests:

```bash

npm run test
```
To run tests with coverage:
```bash

npm run test:coverage
```
Test coverage includes:

API route handlers
Database operations
Business logic
API Documentation
The API is fully documented using Swagger. Once the server is running, you can access the documentation at:

```bash

http://localhost:4000/docs/
```
The Swagger interface provides a detailed overview of all available endpoints, including request formats, parameters, and response structures.
**Project Structure**
Here’s an overview of the project’s structure:

```bash

InventoryAPI/server
│
├── src/
│   ├── models/         # Sequelize models for PostgreSQL
│   ├── routes/         # API routes and endpoints
│   ├── handlers/       # Business logic for request handling
│   ├── middlewares/    # Custom middlewares (e.g., error handling, validation)
│   └── documentation/  # Swagger documentation setup
├── __tests__/          # Unit and integration tests
├── .env                # Environment variables
└── package.json        # Project metadata and dependencies
```

Scripts Available
Development Mode:

```bash

npm run dev
```
Starts the server using Nodemon and ts-node for live-reload during development.

Run Tests:

```bash

npm run test
```
Executes all tests using Jest and reports any issues.
Test with Coverage:

```bash

npm run test:coverage
```
Runs tests and generates a coverage report.

Database Clear: Automatically clears data from your PostgreSQL tables after tests.

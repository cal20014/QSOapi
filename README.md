# QSO API

This is a RESTful API built with Node.js, Express.js, and MongoDB for managing amateur radio QSO (contact) logs. The API provides endpoints for creating, reading, updating, and deleting QSOs.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/qsoAPI.git
Navigate to the project directory:
bash


Copy code
cd qsoAPI
Install dependencies:
bash


Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

Copy code
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Replace <your-mongodb-uri> with the connection string for your MongoDB instance, and <your-jwt-secret> with a secret key for JWT authentication.

Usage
Development
To start the development server with hot-reloading, run:

bash


Copy code
npm run dev
The API will be accessible at http://localhost:3000.

Production
To start the production server, run:

bash


Copy code
npm start
Swagger Documentation
The API is documented using Swagger. To generate the Swagger documentation, run:

bash


Copy code
npm run swagger
The Swagger documentation will be available at http://localhost:3000/api-docs.

API Endpoints
The available endpoints are:

POST /api/qsos: Create a new QSO log
GET /api/qsos: Get all QSO logs
GET /api/qsos/:id: Get a specific QSO log by ID
PUT /api/qsos/:id: Update a QSO log by ID
DELETE /api/qsos/:id: Delete a QSO log by ID
Refer to the Swagger documentation for detailed information about request and response formats.

Authentication
The API uses JSON Web Tokens (JWT) for authentication. To access protected routes, include a valid JWT in the Authorization header of your requests:


Copy code
Authorization: Bearer <your-jwt-token>
Contributing
Contributions are welcome! Please follow the standard Git workflow:

Fork the repository
Create a new branch for your feature or bug fix
Commit your changes
Push to the branch
Create a pull request
License
This project is licensed under the ISC License.
```

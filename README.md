

### Task Management API
This is a Task Management API built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete tasks with support for filtering, sorting, and pagination.

### Table of Contents
Installation
Usage
API Endpoints
Error Handling
Environment Variables
License
Installation


Follow these steps to set up the project locally:

# Clone this repository:

bash Copy code
git clone  Thirupathi-hup/task-management-crud
Navigate to the project directory:

bash Copy code
cd task-management


# Install dependencies:

bash Copy code
npm install
Set up your MongoDB connection using MongoDB Atlas or your local MongoDB instance.

Usage
Set up a .env file in the root directory of the project with the following variables:

# bash Copy code
MONGODB_URI=mongodb://your-mongo-uri
PORT=5000
Start the server:

# bash Copy code
npm start
The server will run at http://localhost:5000.

### API Endpoints
POST /tasks - Create a New Task
Request body:

json Copy code
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2024-12-31T23:59:59Z"
}

Response:

json Copy code
{
  "_id": "taskId",
  "title": "Task Title",
  "description": "Task Description",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2024-12-31T23:59:59Z",
  "createdAt": "2024-12-08T00:00:00Z",
  "updatedAt": "2024-12-08T00:00:00Z"
}
GET /tasks - Retrieve All Tasks
Query Parameters:

status (optional): Filter by task status (TODO, IN_PROGRESS, COMPLETED).
priority (optional): Filter by task priority (LOW, MEDIUM, HIGH).
sort (optional): Sort tasks by a field (createdAt or dueDate).
limit (optional): Number of tasks to return (default: 10).
skip (optional): Offset for pagination (default: 0).
Example:

bash Copy code
GET /tasks?status=TODO&priority=HIGH&sort=createdAt&limit=10&skip=20


Response:

json Copy code
[
  {
    "_id": "taskId1",
    "title": "Task Title 1",
    "description": "Description 1",
    "status": "TODO",
    "priority": "HIGH",
    "dueDate": "2024-12-31T23:59:59Z",
    "createdAt": "2024-12-08T00:00:00Z",
    "updatedAt": "2024-12-08T00:00:00Z"
  },
  {
    "_id": "taskId2",
    "title": "Task Title 2",
    "description": "Description 2",
    "status": "IN_PROGRESS",
    "priority": "MEDIUM",
    "dueDate": "2024-12-20T23:59:59Z",
    "createdAt": "2024-12-01T00:00:00Z",
    "updatedAt": "2024-12-01T00:00:00Z"
  }
]
GET /tasks/:id - Retrieve a Specific Task by ID
Request URL:

bash Copy code
GET /tasks/:id



Response:

json
Copy code
{
  "_id": "taskId",
  "title": "Task Title",
  "description": "Task Description",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2024-12-31T23:59:59Z",
  "createdAt": "2024-12-08T00:00:00Z",
  "updatedAt": "2024-12-08T00:00:00Z"
}
PUT /tasks/:id - Update a Task
Request body:

json Copy code
{
  "status": "IN_PROGRESS",
  "priority": "LOW"
}
Response:

json
Copy code
{
  "_id": "taskId",
  "title": "Task Title",
  "description": "Task Description",
  "status": "IN_PROGRESS",
  "priority": "LOW",
  "dueDate": "2024-12-31T23:59:59Z",
  "createdAt": "2024-12-08T00:00:00Z",
  "updatedAt": "2024-12-09T00:00:00Z"
}
DELETE /tasks/:id - Delete a Task



Response:

Success: 204 No Content
Not Found: 404 Not Found
Error Handling
The API uses proper error handling to return meaningful HTTP status codes:

400 Bad Request: Invalid data in the request.
404 Not Found: Task not found.
500 Internal Server Error: Server issues.


Example error response:

json Copy code
{
  "message": "Task not found"
}
Environment Variables
The application requires the following environment variables:

MONGODB_URI: MongoDB connection string (e.g., MongoDB Atlas).
PORT: The port the application will run on (default is 5000).

### License
This project is licensed under the MIT License - see the LICENSE file for details.

Additional Considerations
You can extend this API by adding user authentication, different task categories, or even adding an email notification system.













# User API (Node.js + MongoDB)

This is a simple RESTful API built using Node.js, Express, and MongoDB. It exposes a single GET endpoint to retrieve a user by their ID, but only returns users who are over the age of 21.

## API Features

- GET /users/:id
  - Accepts a valid MongoDB ObjectId as a route parameter.
  - Returns the user’s data in JSON if the user exists and is over 21.
  - Returns 404 if the user does not exist.
  - Returns 403 if the user is found but is underage (21 or younger).
  - Returns 400 for invalid ObjectId formats.
  - Automatically removes the MongoDB internal __v field from the response.

## Approach

The application uses Mongoose to interact with the MongoDB database and defines a User schema. The route logic explicitly checks:
1. If the ID is a valid ObjectId.
2. If a user exists with that ID.
3. If the user’s age is greater than 21.

Appropriate error handling and response codes are used for each case. The schema also includes a transform function to clean the response.

## Tech Stack

- Node.js
- Express
- MongoDB

## Running Locally

1. Clone the repository
   
   ```
   git clone https://github.com/yourusername/user-api-mongo.git
   ```
   ```
   cd user-api-mongo
   ```

2. Install dependencies

    ```
    npm install
    ```

3. Create a .env file

    ```
    MONGODB_URI=mongodb://localhost:27017/userdb
    PORT=3000
    ```

4. Seed test data

    ```
    node seed.js
    ```

5. Start the server

     ```
     node index.js
     ```

6. Test the API

   Visit: http://localhost:3000/users/<valid_user_id>

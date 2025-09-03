# Day 11: Backend CRUD with Express.js

👨‍💻 Today was a huge step! I moved from the frontend to the backend and built my first **CRUD API** using **Node.js** and **Express**. It feels amazing to create something that can actually handle data.

---

## 📚 What I Learned

1.  **CRUD Operations:** This is the foundation of most applications. It stands for **C**reate, **R**ead, **U**pdate, and **D**elete.
2.  **Express.js Routes:** I learned how to map the CRUD operations to different HTTP methods and URL paths:
    * `POST` -> Create data (`/students`)
    * `GET` -> Read data (`/students`, `/students/:id`)
    * `PUT` -> Update data (`/students/:id`)
    * `DELETE` -> Delete data (`/students/:id`)
3.  **In-Memory "Database":** For this task, I used a simple JavaScript array to store the student data so I could focus on the API logic without needing a real database yet.
4.  **Testing with Postman:** I used Postman to send requests to my API endpoints and see if they worked correctly. It's a great tool for backend development.

---

## 📝 Mini Task

Create a **Student CRUD API**. The API should be able to:
* Get a list of all students.
* Get a single student by their ID.
* Add a new student.
* Update an existing student's details.
* Delete a student.

---

## ▶️ How to Run the Project

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the server:**
    ```bash
    node index.js
    ```
    The server will start on `http://localhost:3000`.

### API Endpoints

* `GET /students` - Fetches all students.
* `GET /students/:id` - Fetches a single student by ID.
* `POST /students` - Adds a new student (send data in JSON body).
* `PUT /students/:id` - Updates a student by ID.
* `DELETE /students/:id` - Deletes a student by ID.

✨ Building a real API that can create and manage data feels like a superpower. Can't wait to connect this to a real database and a frontend!

# Day 5: Express.js Basics

👨‍💻 Today, I started learning **Express.js**, and it's a game-changer! It's a framework that sits on top of Node.js and makes creating servers and APIs much simpler and more organized than using the built-in `http` module.

---

### 📚 What I Learned
1.  **What is Express.js?**: It’s a minimal and flexible Node.js web application framework. It provides a robust set of features to develop web and mobile applications, especially APIs.
2.  **Installation**: Installing it is as simple as running `npm install express`.
3.  **Routing**: Express makes it easy to handle different HTTP requests (like GET and POST) for different URLs (routes).
    * `app.get()`: Handles **GET** requests, typically used to fetch data.
    * `app.post()`: Handles **POST** requests, typically used to submit new data.
4.  **Sending JSON**: The `res.json()` method is a convenient way to send JSON data as an API response. Express automatically sets the correct `Content-Type` header.

---

### 📝 Mini Task
The task was to create an API that returns a **list of students in JSON format**. This involved creating a `GET` route at an endpoint like `/api/students`.

---

### 🚀 Setup and Run
1.  **Navigate to the folder** in your terminal:
    ```bash
    cd Day5-Express-Basics
    ```

2.  **Initialize the project** to create `package.json`:
    ```bash
    npm init -y
    ```

3.  **Install Express**:
    ```bash
    npm install express
    ```

4.  **Run the application**:
    ```bash
    node app.js
    ```

5.  **Test the API endpoints** using your browser or an API client like Postman:
    * `GET http://localhost:3000/`
    * `GET http://localhost:3000/api/students` (This is the mini-task)
    * `POST http://localhost:3000/api/students`

---

✨ Express simplifies so many things! Defining routes and sending JSON data is incredibly clean. This feels like a massive step up in building real-world applications.

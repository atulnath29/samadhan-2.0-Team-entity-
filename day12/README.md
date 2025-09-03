# Day 12: React + API - My First Full-Stack App!

👨‍💻 This is it! Today, I connected the dots between frontend and backend. I built a **React To-Do App** that talks to the **Node.js API** I created. Seeing the UI update with data from my own server is one of the coolest things I've done so far.

---

## 📚 What I Learned

1.  **Connecting Frontend to Backend:** I used the `fetch()` API inside my React components to make requests to my backend server.
2.  **State Management with API Data:** I used the `useState` hook to store the list of todos fetched from the server.
3.  **Fetching Data on Load:** The `useEffect` hook was perfect for fetching all the todos as soon as the app component loads for the first time.
4.  **Handling User Actions:** I created functions to handle adding (`POST` request) and deleting (`DELETE` request) todos. The UI automatically updates after each action!
5.  **CORS (Cross-Origin Resource Sharing):** I ran into an issue where my React app (on port 3000) couldn't talk to my API (on port 4000). I learned that this is a security feature and fixed it by using the `cors` package in my Express app.

---

## 📝 Mini Task

Build a full-stack **To-Do App**.
* The **frontend** is built with React and shows the list of tasks.
* The **backend** is a Node.js/Express API that manages the tasks (create, read, delete).

---

## ▶️ How to Run the Project

You need to run both the backend and frontend servers simultaneously in two separate terminals.

### 1. Run the Backend

```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Start the server
node index.js
# The backend will be running on http://localhost:4000
```
### 2. Run the Frontend

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
# The frontend will open and run on http://localhost:3000

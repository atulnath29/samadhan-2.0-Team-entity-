# Day 18: Trello-like Task Management System 📋

👨‍💻 Today's project was the most complex yet: a full-stack, real-time, collaborative task management board similar to **Trello**. This application combines a persistent REST API for data with a real-time WebSocket layer to allow multiple users to manage a project together seamlessly.

---

## ✨ Key Features & Concepts

1.  **Drag & Drop Interface:** Implemented using the beautiful and accessible `react-beautiful-dnd` library, allowing users to intuitively move tasks between different status columns.
2.  **Persistent Data:** All board, column, and task data is structured and stored in a **MongoDB** database, ensuring data is saved between sessions.
3.  **Real-time Collaboration:** Using **Socket.io**, when one user moves a task, the change is instantly reflected on the boards of all other connected users. This is achieved by having the server broadcast update events after a successful database operation. 4.  **Structured API:** A RESTful API built with Express handles all the core data operations (fetching the board, creating tasks, and updating task positions).

---

## ⚙️ How it Works

1.  The React frontend fetches the initial board state from the API (`GET /api/board`).
2.  A user drags a task from one column to another.
3.  On drop, the frontend optimistically updates its own UI for a snappy, instant feel.
4.  It then sends an API request to the backend (`PUT /api/board/move`) to permanently save the new task order and location in the database.
5.  After successfully updating the database, the backend server emits a `boardUpdated` event via Socket.io to all other connected clients.
6.  Other clients receive this event and update their UI to match the new, synchronized state.

---

## ▶️ How to Run the Project

You need to run both the backend and frontend servers simultaneously in two separate terminals.

### 1. Run the Backend

```bash
# Navigate to the backend folder
cd backend

# Create a .env file with your MongoDB connection string
# MONGO_URI=your_mongodb_atlas_connection_string

# Install dependencies and start
npm install
npm start
```

### 2. Run the Frontend
```bash

# In a new terminal, navigate to the frontend folder
cd frontend

# Install dependencies and start
npm install
npm start
# The frontend will open and run on http://localhost:3000

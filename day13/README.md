# Day 13: Database Basics - Data That Lasts!

👨‍💻 Today, I finally cut the cord from in-memory arrays! I learned how to connect my Express backend to a **MongoDB database** using **Mongoose**. I rebuilt the app from yesterday, but this time it's a **Notes App**, and the data actually persists. If I restart the server, the notes are still there! This feels like building a real, proper application.

---

## 📚 What I Learned

1.  **Why Databases?** I learned that storing data in arrays is temporary (volatile). A database provides persistent storage, so the data is saved permanently.
2.  **MongoDB:** It's a NoSQL database that is super flexible and stores data in a JSON-like format called BSON. It felt very natural to use with JavaScript. I used **MongoDB Atlas**, which is a free cloud service, so I didn't have to install anything locally. 3.  **Mongoose:** This is an ODM (Object Data Modeling) library that makes talking to MongoDB from Node.js much easier. It helps you define a strict structure for your data (**Schema**) and provides simple methods for creating, reading, updating, and deleting data (**Models**).
4.  **Connecting the App:** I used a special connection string (URI) from my MongoDB Atlas account to connect my Express app to the database.
5.  **Environment Variables (`.env`):** I learned that you should **never** hardcode secret keys like a database URI directly in your code. I used the `dotenv` package to store the URI in a `.env` file, which is kept private and not committed to Git.

---

## 📝 Mini Task

Build a full-stack **Notes App** with complete CRUD functionality.
* The **backend** connects to a MongoDB database to manage the notes.
* The **frontend** is a React app to create, view, and delete notes.

---

## ▶️ How to Run the Project

### Prerequisites

You need a **MongoDB Atlas account** (it's free!).
1.  Create a new cluster.
2.  Get your **connection string (URI)**.
3.  In the `backend` folder, create a file named `.env`.

### 1. Run the Backend

```bash
# Navigate to the backend folder
cd backend

# Create the .env file and add your connection string
# Your .env file should contain one line:
# MONGO_URI=mongodb+srv://<user>:<password>@cluster...

# Install dependencies
npm install

# Start the server
npm start
# The backend will run on http://localhost:4000
```
### 2. Run the Frontend
```bash

# In a new terminal, navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
# The frontend will run on http://localhost:3000

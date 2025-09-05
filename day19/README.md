# Day 19: Social Media Dashboard 🌐

👨‍💻 Today I built the foundations of a social media platform. This full-stack MERN application allows users to register, log in, create posts, and interact with other posts by liking and commenting. It's a complex application that demonstrates how to model and manage relationships between different types of data (users, posts, likes, comments).

---

## ✨ Core Features

1.  **User Authentication:** Secure registration and login using JWT, allowing the application to identify users for creating content and interactions.
2.  **Post Feed:** A central dashboard where all user posts are displayed in reverse chronological order.
3.  **Create Posts:** Logged-in users can share their thoughts by creating new posts, which appear at the top of the feed.
4.  **Like System:** Users can like and unlike posts. The like count updates, and the system prevents a user from liking the same post multiple times.
5.  **Commenting:** Users can add comments to posts to engage in discussions with others.

---

## 💾 Data Modeling

The application's data is structured in MongoDB using Mongoose with two main models:

* **User Model:** Stores `username` and a hashed `password`.
* **Post Model:** A more complex model that stores:
    * `content`: The text of the post.
    * `author`: A reference to the `User` who created it.
    * `likes`: An array of references to `Users` who have liked the post.
    * `comments`: An embedded array of comment objects, each containing a reference to the commenting `User` and the comment text.

---

## ▶️ How to Run the Project

You need to run both the backend and frontend servers simultaneously in two separate terminals.

### 1. Run the Backend

```bash
# Navigate to the backend folder
cd backend

# Create a .env file with your secrets:
# MONGO_URI=your_mongodb_atlas_connection_string
# JWT_SECRET=your_super_secret_jwt_key

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
```

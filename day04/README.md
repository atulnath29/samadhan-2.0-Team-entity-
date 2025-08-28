# Day 4: Node.js Introduction

👨‍💻 Today was a huge step forward! I went from writing simple JavaScript scripts to creating my very own **web server** using **Node.js**. Seeing JavaScript power a backend application is amazing.

---

### 📚 What I Learned
1.  **What is Node.js?**: It's a JavaScript runtime environment that lets us run JS code **outside of a web browser**. It's perfect for building fast and scalable servers and APIs.
2.  **NPM (Node Package Manager)**: This is the heart of the Node.js ecosystem. It's a command-line tool to install and manage packages (reusable code libraries).
3.  **`npm init`**: This command creates a `package.json` file, which acts like a blueprint for the project. It tracks project information and dependencies.
4.  **Installing Packages**: I learned to use `npm install <package-name>` to add external packages. For today's practice, I installed `chalk` to add some color to my console logs.
5.  **HTTP Module**: Node.js has a built-in `http` module that allows you to create a web server without any external frameworks.

---

### 📝 Mini Task
The task was to create a simple **API (server)** that listens for requests on a specific port and returns a "Hello, World!" message.

---

### 🚀 Setup and Run
This is different from previous days, as it involves setting up a Node project.

1.  **Navigate to the folder** in your terminal:
    ```bash
    cd Day4-NodeJS-Intro
    ```

2.  **Initialize the project** (this creates `package.json`):
    ```bash
    npm init -y
    ```

3.  **Install the example package**:
    ```bash
    npm install chalk
    ```

4.  **Run the server**:
    ```bash
    node server.js
    ```

5.  **Open your browser** and go to `http://localhost:3000`. You should see "Hello, World!".

---

✨ Creating a server that I could actually visit in my browser was a really cool moment. I'm excited to build more complex APIs!

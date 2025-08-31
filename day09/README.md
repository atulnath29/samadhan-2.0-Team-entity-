# Day 9: useEffect & Fetching API Data

👨‍💻 This was a massive milestone! Today, I connected my **React frontend** to my **Express.js backend**. I learned about the `useEffect` hook, which is essential for handling "side effects" like fetching data from a server.

Seeing the student data from my own backend API appear in my React application was an incredible moment. It feels like I'm finally building a full-stack application!

---

### 📚 What I Learned
1.  **Side Effects in React**: A "side effect" is anything your component does that isn't directly calculating the output (the JSX). Common examples include fetching data, using timers (`setInterval`), or manually manipulating the DOM.
2.  **The `useEffect` Hook**: This is the hook React provides to handle all side effects. It lets you run code *after* the component has rendered.
3.  **The Dependency Array `[]`**: This is the second argument to `useEffect`. By passing an empty array `[]`, I told React to run my effect **only once**, right after the component first mounts. This is the perfect pattern for fetching data when a component loads.
4.  **Fetching Data**: The process was to use the `fetch` API inside `useEffect` to make a GET request to my backend URL. Once the data arrived, I used the `useState` setter function to store it in my component's state, causing it to re-render and display the data.
5.  **CORS (Cross-Origin Resource Sharing)**: I hit my first major real-world problem! The browser blocked my React app (on `localhost:5173`) from fetching data from my Express server (on `localhost:3000`) due to security policies. I learned I had to enable CORS on my backend by installing and using the `cors` package in Express.

---

### 📝 Mini Task
The task was to build a **Student Directory** component. This component fetches the list of students from the API I built on Day 5 and displays them as a list. This required running both the backend and frontend servers at the same time.

---

### 🚀 Code & Setup
This was a two-part process: updating the backend to allow requests, and then building the frontend component.

#### Part 1: Update the Backend (Your Day 5 Project)
1.  Navigate to your Express project folder: `cd Day5-Express-Basics`
2.  Install the `cors` package: `npm install cors`
3.  Update your `app.js` file to use the `cors` middleware. *(Code below)*

#### Part 2: Update the Frontend (Your React Project)
1.  Create a new component file at `src/components/StudentDirectory.jsx`. *(Code below)*
2.  Update your main `src/App.jsx` file to display the new component. *(Code below)*

---

### ▶️ How to Run Both Servers
You need to have **two terminals** open at the same time.

* **In Terminal 1 (Backend):**
    ```bash
    cd Day5-Express-Basics
    node app.js
    # You should see 'Server is running on http://localhost:3000'
    ```
* **In Terminal 2 (Frontend):**
    ```bash
    cd day6-react-intro # or whatever you named your React project
    npm run dev
    # Open your browser to the localhost address it gives you (e.g., http://localhost:5173)
    ```

---

✨ Getting the frontend and backend to communicate was challenging, but fixing the CORS issue felt like a real developer moment. I'm excited to build more features that rely on this connection!

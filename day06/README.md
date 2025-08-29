# Day 6: React Setup & First Components

👨‍💻 Today, I officially started my journey into frontend development with **React**! ⚛️ I used **Vite** to bootstrap my project, and the setup was incredibly fast. It's exciting to see how modern web applications are built.

---

### 📚 What I Learned
1.  **Vite**: It's a next-generation frontend tooling that provides a significantly faster and leaner development experience for modern web projects. Creating a React app was just one command away.
2.  **Components**: These are the building blocks of any React application. They are like reusable JavaScript functions that return HTML. I learned to think of my UI in terms of small, independent components.
3.  **JSX (JavaScript XML)**: This is a syntax extension that lets me write HTML-like code directly in my JavaScript files. It makes creating UI components feel very intuitive.
4.  **Props (Properties)**: Props are how components pass data to each other, from parent to child. This allows components to be dynamic and reusable.

---

### 📝 Mini Task
The task was to create a reusable **`ProfileCard` component**. This component should be able to accept data (like a person's name, role, and team) via props and display it.

---

### 🚀 Setup and Run
1.  **Create the React project** using Vite (run this in your main projects folder):
    ```bash
    npm create vite@latest day6-react-intro -- --template react
    ```

2.  **Navigate into the new project folder**:
    ```bash
    cd day6-react-intro
    ```

3.  **Install the dependencies**:
    ```bash
    npm install
    ```

4.  **Create your new component**: Inside the `src/` folder, create a new file named `ProfileCard.jsx`. *Code is provided below*.

5.  **Use your new component**: Modify the `src/App.jsx` file to import and use the `ProfileCard` component. *Code is provided below*.

6.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Now, open your browser to the local address it provides (usually `http://localhost:5173`).

---

✨ The "aha!" moment for me was seeing the three profile cards appear on the screen. Being able to reuse the same component with different data by just changing the props is amazing. This component-based architecture makes perfect sense!

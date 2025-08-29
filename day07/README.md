# Day 7: State Management with useState

👨‍💻 Today was a major "Aha!" moment in my React journey. I learned about **state**, the core concept that makes React components interactive and dynamic. The magic behind it all is the `useState` hook.

---

### 📚 What I Learned
1.  **What is State?**: I learned to think of **state** as a component's private memory. It's any data that can change over time within that component. When the state changes, React is smart enough to automatically re-render the component to display the updated information.
2.  **The `useState` Hook**: This is a special function from React that lets you "hook into" the state mechanism in functional components. The syntax is:
    ```jsx
    const [currentValue, setValueFunction] = useState(initialValue);
    ```
    * `currentValue`: The variable that holds the current state.
    * `setValueFunction`: The function you call to update the state.
3.  **Handling Inputs**: I learned how to create "controlled components" by connecting an input field directly to a state variable. The input's `value` is set by the state, and its `onChange` event updates the state. This creates a two-way data binding.

---

### 📝 Mini Task
The task was to build two separate components to practice `useState`:
1.  **Counter**: A simple component with buttons to increment and decrement a number.
2.  **Live Text Preview**: An input field where the text you type is displayed in real-time below it.

---

### 🚀 Code Implementation
I added the following components to the React project I created yesterday (`day6-react-intro`).

1.  First, I created a new folder `src/components/` to keep my components organized.
2.  I created `src/components/Counter.jsx`. *(Code below)*
3.  I created `src/components/LivePreview.jsx`. *(Code below)*
4.  Finally, I updated `src/app.jsx` to display these new components. *(Code below)*

---

✨ Connecting an input field to state and seeing the text update live on the screen was incredibly satisfying. `useState` is definitely a superpower for building interactive UIs!

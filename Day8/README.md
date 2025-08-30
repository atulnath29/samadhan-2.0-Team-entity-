# Day 8: Rendering Lists & Handling Events

👨‍💻 Today's focus was on handling lists of data, a very common task in any application. I learned the standard "React way" of rendering lists using the `.map()` method and the importance of the `key` prop.

Building a **To-Do List** was the perfect mini-project to bring together state management (`useState`), event handling (`onClick`, `onChange`), and list rendering all in one component.

---

### 📚 What I Learned
1.  **Rendering Lists with `.map()`**: In React, you don't use a `for` loop in JSX. Instead, you take an array of data and use the `.map()` method to transform each item into a React element (like an `<li>`).
2.  **The `key` Prop**: This was a crucial new concept. When rendering a list, you must provide a unique `key` prop to each element in the list (e.g., `<li key={item.id}>`). This helps React efficiently update the UI by identifying which items have changed, been added, or been removed.
3.  **Handling Events**: I got more practice handling user interactions. I used `onChange` for the text input to update the state as I type and `onClick` for the button to trigger the function that adds a new task to the list.

---

### 📝 Mini Task
The task was to build a functional **To-Do List**. It needed an input field for new tasks, a button to add them, and an unordered list to display all the tasks. The entire application is self-contained and manages its data using local component state.

---

### 🚀 Code Implementation
I added a new `TodoList` component to my React project and then included it in the main `App.jsx` file.

1.  I created a new component file at `src/components/TodoList.jsx`. *(Code below)*
2.  I updated `src/App.jsx` to display the new to-do list. *(Code below)*

---

✨ Building the to-do list felt like creating my first complete,

# React + Vite Task Manager

This project is a simple task management application built using React and Vite, styled with Tailwind CSS, and utilizes Redux for state management.

## Project Installation

Follow these steps to set up the project:

```bash
# Create a new Vite project
npm create vite@latest

# Navigate into the project directory
cd project

# Install the project dependencies
npm install
```

## Project Architecture

### High-Level Design (HLD)

The application provides the following functionalities:

1. **Add Task**: Users can add new tasks to the list.
2. **List Tasks**: Display all the tasks.
3. **Remove Tasks**: Users can remove tasks from the list.
4. **Modify Tasks**: Users can edit existing tasks.
5. **Mark Completed Tasks**: Users can mark tasks as completed.

### Low-Level Design (LLD)

1. **State Management**
    - The application uses **Redux** for managing the state.

2. **Component Level Management**
    - `AddTodo`: Component for adding a new task.
    - `Todo`: Component for displaying individual tasks.

3. **Pages Management**
    - **Home Page**: The main page that includes:
        - `Input Box`: For entering new tasks.
        - `ul-li` structure: For listing tasks.

4. **CSS**
    - The application uses **Tailwind CSS** for styling.

## Directory Structure

```
project
│   README.md
│   package.json
│   vite.config.js
|   tailwind.config.js
|   postcss.config.js
│
└───src
    │   main.jsx
    │   App.jsx
    ├───components
    │   │   AddTodo.jsx
    │   │   Todo.jsx
    ├───store
    │   │   store.js
    │   │   todoSlice.js
    └───styles
        │   index.css
```

## Running the Project

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

This version provides a more detailed and organized structure, making it easier for others to understand and contribute to the project.
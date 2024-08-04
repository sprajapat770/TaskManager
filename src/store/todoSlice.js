import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id:1,
            title: 'Hello Todo',
            completed: false
        }

    ],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload) state.todos.push({id: nanoid(), completed: false, title: action.payload})
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions 
export default todoSlice.reducer;
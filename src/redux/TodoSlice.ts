import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import Todo from "../Domain/Model/Todo";
interface TodoState {
    todos: Array<Todo>;
}

const initialState: TodoState = {
    todos: Array.from([new Todo(uuidv4(), "You have a party to prepare.", false)])
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        updateTodos: (state, action: PayloadAction<Array<Todo>>) => {
            state.todos = action.payload
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todoItem => todoItem.id !== action.payload);
        },
        markGivenTodoAsComplete: (state, action: PayloadAction<string>) => {
            const index = state.todos.findIndex(todoItem => todoItem.id === action.payload);
            if (index !== -1) {
                const found = state.todos[index];
                state.todos = [
                    ...state.todos.slice(0, index),
                    found.markAsComplete(),
                    ...state.todos.slice(index + 1)
                ];
            }
        }

    }
});

export const { updateTodos, addTodo, removeTodo, markGivenTodoAsComplete } = todoSlice.actions;

export default todoSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos = [...state.todos, payload];
    },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const selectTodos = state => state.todos.todos;

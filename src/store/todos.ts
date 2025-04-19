import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {generateId} from '../utils';
import {Todo} from '../types';

export interface TodosState {
  current: Todo[];
  finished: Todo[];
}

const initialState: TodosState = {
  current: [
    {
      id: generateId(),
      title: 'Learn React',
      completed: false
    }
  ],
  finished: [
    {
      id: generateId(),
      title: 'Learn HTML and CSS',
      completed: true
    }
  ]
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo['title']>) => {
      const newTodo = {
        id: generateId(),
        title: action.payload,
        completed: false
      };

      return {...state, current: [newTodo, ...state.current]};
    }
  }
});

export const {addTodo} = todosSlice.actions;

export default todosSlice.reducer;

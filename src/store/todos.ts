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
    },
    finishTodo: (state, action: PayloadAction<Todo['id']>) => {
      const todo = state.current.find(({id}) => id === action.payload);

      return {
        ...state,
        current: state.current.filter(({id}) => id !== action.payload),
        finished: [{...todo!, completed: true}, ...state.finished]
      };
    },
    unFinishTodo: (state, action: PayloadAction<Todo['id']>) => {
      const todo = state.finished.find(({id}) => id === action.payload);

      return {
        ...state,
        current: [{...todo!, completed: false}, ...state.current],
        finished: state.finished.filter(({id}) => id !== action.payload)
      };
    },
    removeTodo: (state, action: PayloadAction<Todo['id']>) => ({
      ...state,
      current: state.current.filter(({id}) => id !== action.payload),
      finished: state.finished.filter(({id}) => id !== action.payload)
    })
  }
});

export const {addTodo, finishTodo, unFinishTodo, removeTodo} = todosSlice.actions;

export default todosSlice.reducer;

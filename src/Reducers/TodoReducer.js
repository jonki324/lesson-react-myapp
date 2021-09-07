import {
  CREATE_TODO,
  DONE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
} from '../Actions/TodoAction';

const initialState = [];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      const todo = { id, body: action.body, isDone: false };
      return [...state, todo];
    }
    case DONE_TODO: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: action.isDone } : todo
      );
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case DELETE_ALL_TODO: {
      return state.filter((todo) => !todo.isDone);
    }
    default: {
      return state;
    }
  }
};

export default TodoReducer;

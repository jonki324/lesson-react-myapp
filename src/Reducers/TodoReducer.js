import {
  CREATE_TODO,
  UPDATE_TODO,
  FILTER_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  TOGGLE_ALL_COMPLETED,
} from '../Actions/TodoAction';

export const initialState = {
  todoList: [],
  filter: { keyword: '', removeCompleted: false },
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      const todoList = state.todoList;
      const id =
        todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
      const todo = { ...action.payload, id };
      return { ...state, todoList: [...todoList, todo] };
    }
    case UPDATE_TODO: {
      const todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return { ...state, todoList };
    }
    case FILTER_TODO: {
      return { ...state, filter: action.payload };
    }
    case DELETE_TODO: {
      const todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todoList };
    }
    case DELETE_ALL_TODO: {
      const todoList = state.todoList.filter((todo) => !todo.isCompleted);
      return { ...state, todoList };
    }
    case TOGGLE_ALL_COMPLETED: {
      const todoList = state.todoList.map((todo) => {
        todo.isCompleted = action.payload;
        return todo;
      });
      return { ...state, todoList };
    }
    default: {
      return state;
    }
  }
};

export default TodoReducer;

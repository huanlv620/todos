import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO, SET_TODO_INPUT, DELETE_TODO } from "./constant";

export const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload: payload,
  };
};

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    }
  };

  export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload: payload,
    }
  };

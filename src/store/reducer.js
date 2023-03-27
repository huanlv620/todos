import { ADD_TODO, SET_TODO_INPUT, DELETE_TODO } from "./constant";
const storageTodos = JSON.parse(localStorage.getItem("todos"));

const initState = {
  todos: storageTodos ?? [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
      
    case ADD_TODO:
      const todos = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      // save localStorage
      const jsonTodos = JSON.stringify(todos.todos);
      localStorage.setItem("todos", jsonTodos);
      return todos;

    case DELETE_TODO:
      const newJobs = [...state.todos];
      newJobs.splice(action.payload);
      return {
        ...state,
        todos: newJobs,
      };
  }
}
export { initState };
export default reducer;

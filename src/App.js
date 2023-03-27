import { useRef } from "react";
import { useStore, actions } from "./store";
function App() {
  const inputRef = useRef();
  const [state, dispatch] = useStore();
  const handleAdd = () => {
    dispatch(actions.addTodo(state.todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };
  const storageTodos = JSON.parse(localStorage.getItem("todos"));
  console.log("storageTodos", storageTodos);
  return (
    <div style={{ padding: 20 }}>
      <input
        value={state.todoInput}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
        ref={inputRef}
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span
              onClick={() => {
                dispatch(actions.deleteTodo(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

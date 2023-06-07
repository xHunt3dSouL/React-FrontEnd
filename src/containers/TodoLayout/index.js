import Button from "../../components/button";
import "./todoLayout.css";
import { useState } from "react";

function TodoLayout() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText) {
      //Add to the todos state
      setTodos([...todos, todoText]);
      //Clear the text input
      setTodoText("");
    }
  };

  const deleteTodo = (index) => {
    //Delete the passed index todo
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  };

  return (
    <div className="container">
      <div className="header">Todo</div>
      <div className="input-group">
        <input
          type="text"
          id="todo"
          className="todoText"
          placeholder="What to do today?"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        ></input>
        <Button color="green" handleClick={addTodo}>
          Add
        </Button>
      </div>
      <div className="task-group">
        {todos.map((todo, index) => {
          return (
            <div className="task-list" key={index}>
              <div className="task">{todo}</div>
              <Button color="red" handleClick={() => deleteTodo(index)}>
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoLayout;

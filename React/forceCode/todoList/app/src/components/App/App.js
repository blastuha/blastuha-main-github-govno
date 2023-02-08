import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
// import deleteImg from "";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [allComplete, setAllComplete] = useState(0);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
      setAllTodos(allTodos + 1);
    } else {
      console.log("Введите текст");
    }
  };

  const toggleTodo = (id) => {
    // меняем статус todo.done при клике
    setTodos(
      todos.map((todo) => {
        if (id !== todo.id) {
          setAllComplete(allComplete + 1);
          return todo;
        }

        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setAllTodos(allTodos - 1);
  };

  const clearTodos = () => {
    setTodos([]);
    setAllTodos(0);
  };

  useEffect(() => {
    setAllComplete(todos.filter((todo) => todo.done === true).length);
  }, [todos]);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <Form putTodo={putTodo} />
        <ul className="todos">
          {todos.map((todo) => (
            <li
              className={todo.done ? "todo done" : "todo"}
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
              <img
                src={require("./delPng.png")}
                alt="delete-pic"
                className="delete-img"
                onClick={(e) => {
                  e.stopPropagation(); // отключаем onClick на ли
                  removeTodo(todo.id);
                }}
              />
            </li>
          ))}
          <div className="info">
            <span>All todos: {allTodos}</span>
            <span>All completed todos: {allComplete}</span>
          </div>
          <button className="delete-all-btn" onClick={clearTodos}>
            Delete all todos
          </button>
        </ul>
      </div>
    </div>
  );
}

export default App;

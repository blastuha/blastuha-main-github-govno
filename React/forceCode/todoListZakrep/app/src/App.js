import "./App.css";
import "./components/Form/Form.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompetedTodos] = useState(0);

  const onChangeInputValue = (event) => {
    setInputValue(event);
  };

  const submitTodo = (value) => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: value,
          done: false,
        },
      ]);
    }
  };

  const toggleTodoDone = (id) => {
    // пробегаемся по всем todo, у той которое совпадает id - меняем done-статус, а у остальных - не меняем ничего.
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          setCompetedTodos(completeTodos + 1);
          console.log(completeTodos);
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    // filter - возвращает фильтрованный по условию массив
    setCompetedTodos(todos.filter((todo) => todo.done === true).length);
  }, [todos]);

  return (
    <div className="wrapper__block">
      <div className="app__container">
        <h1>React ToDoList</h1>
        <Form
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
          submitTodo={submitTodo}
          setInputValue={setInputValue}
        />
        <ul className="app__todos-list">
          {todos.map((todo) => (
            <li
              className="app__todo"
              key={todo.id}
              onClick={() => toggleTodoDone(todo.id)}
            >
              <span className={`todo__text ${todo.done ? "done" : ""}`}>
                {todo.text}
                <img
                  className="delete-img"
                  src="./img/delete.png"
                  alt="deleteImg"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteTodo(todo.id);
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
        <div className="app__stats">
          <span className="app__alltodos">All todos: {todos.length}</span>
          <span className="app__completedtodos">
            Completed todos: {completeTodos}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

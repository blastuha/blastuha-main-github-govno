import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  const [inputValue, setValue] = useState("");

  return (
    // при отправке, берет value, создает todoшку и кладет в состояние todo
    <form
      className="form"
      onSubmit={(e) => {
        // нажатие на enter
        e.preventDefault();
        props.putTodo(inputValue);
        setValue("");
      }}
    >
      {/* когда пишу, то сохраняется все в состояние inputValue */}
      <input
        type="text"
        placeholder="Введите текст..."
        className="input"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Form;

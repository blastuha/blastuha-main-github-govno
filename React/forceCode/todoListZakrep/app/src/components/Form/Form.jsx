import React from "react";
import "./Form";

const Form = ({
  inputValue,
  onChangeInputValue,
  submitTodo,
  setInputValue,
}) => {
  return (
    <>
      <form
        className="form"
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(inputValue);
          setInputValue("");
        }}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Введите текст..."
          value={inputValue}
          onChange={(e) => onChangeInputValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default Form;

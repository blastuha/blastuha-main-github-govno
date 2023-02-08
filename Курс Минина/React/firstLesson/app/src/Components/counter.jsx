import React, { useState } from "react";
// useState хранит значение counta вне компонента (Ассинхронный)
// инструмент для получения и обновления данных опр. параметра в воображаемом хранилище

const Counter = () => {
  let [count, setCount] = useState(0); // count - обявляем чем это является; setCount - функция изменения состояния; useState(0) - изначальное состояие
  // название функции всегда должно начинаться с set
  // в setCounter вшит обработчик событий, сообщаем, что наше состояние изменилось, и компоненты в ДОМ необходимо обновить
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // count + 1 сработает только один, из-за системы оптимизаций дублирования событий
    // если мы вызываем осознанно, то добавляем (prevState) => prevState + 1
  };
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    console.log(id);
  };

  return (
    <>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag}
            className="btn btn-primary btn-sm m-2"
            onClick={() => handleTagChange(tag)}
          >
            {tag}
          </li> // каждый ребёнок в листе, должен иметь уникальный ключ. сделаем ключем сам tag, так как он уникален сам по себе. можно использовать id
        ))}
      </ul>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
    // вызываем рефернс, а не со (), () сразу же вызовется.
  );
};

export default Counter;

// Чтобы было несколько компонентов нужно обернуть в div

// div можно заменить на React.Fragment (компоненты вернутся без обёрточного diva) - это бывает необходимо в случае, если есть наследование стилей от родительских компонент

// в новых версиях React.Fragment = <></>

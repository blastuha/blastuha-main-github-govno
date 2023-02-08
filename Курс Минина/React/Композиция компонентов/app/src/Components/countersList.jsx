import React, { useState } from "react";
import Counter from "./counter";
// Компонент, которому принадлежит часть состояния должен быть тем, кто его модифицирует. Состояние принадлежит CountersList значит и управляет состоянием он
// Состояние counters - нельзя изменить внутри counter

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 3, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  // counter - вызывает данный метод, countersList обрабатывает
  const handleDelete = (countId) => {
    const newCounters = counters.filter((counter) => counter.id !== countId);
    setCounters(newCounters);
  };

  const handleReset = () => {
    // дочерние компоненты отображают состояние родительского компонента - называются - управляемые компоненты (не имеют собственного состояния, а отображают состояние родительского компонента)
    console.log("Reset");
    setCounters(initialState);
  };

  const handleIncrement = (countId) => {
    const indexElement = counters.findIndex((c) => c.id === countId);
    console.log("index", indexElement);
    const countersNew = [...counters];
    countersNew[indexElement].value++;
    setCounters(countersNew);
  };

  const handleDecrement = (counterId) => {
    const indexElement = counters.findIndex((c) => c.id === counterId);
    const countersNew = [...counters];
    countersNew[indexElement].value--;
    setCounters(countersNew);
  };

  return (
    <>
      {counters.map((count) => {
        // все методы передаваемые во внутрь компонентов должны начинаться с on
        return (
          <Counter
            {...count} // не нужно прописывать каждый пропс, прос - это объект
            // id={count.id}
            // value={count.value}
            // name={count.name}
            key={count.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        );
      })}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;

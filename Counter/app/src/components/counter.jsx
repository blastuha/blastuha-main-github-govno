import { useState } from "react";
import React from "react";
import api from "../api";

const Counter = () => {
  const [goods, setGoods] = useState(api.goods.fetchAll());
  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  // const handleDecrement = () => {
  //   setCount((prevState) => prevState - 1);
  // };

  // const handleGoodIncrement = (count) => {
  //   setGoods((count))
  // }

  return (
    <div className="shoppingBag">
      <menu className="menu">
        <span className="menu_navbar">Navbar</span>
        <span className="menu_basket">Корзина</span>
      </menu>
      <div className="functionalBox">
        {goods.map((good) => {
          return (
            <div className="functionalBox_item">
              <span className="item_text">{good.name}</span>
              <div className="item_counter">{good.price} рублей</div>
              <div className="item_counter">{good.count}</div>
              <div className="item_buttons">
                <button
                  className="button_plus"
                  onClick={(event) => setGoods({event.target.count: })}
                >
                  +
                </button>
                <button className="button_minus">-</button>
                <button className="button_delete">del</button>
              </div>
            </div>
          );
        })}

        <div className="functionalBox_buttons">
          <div className="button_clearAll">Очистить</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

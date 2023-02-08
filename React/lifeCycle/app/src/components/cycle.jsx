import React from "react";

//https://www.youtube.com/watch?v=bMApsb0FpFE&ab_channel=WebDeveloperBlog

export default class LifeCycleOfComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "off",
      label: "Press",
    };

    this.press = this.press.bind(this);

    console.log("contrusctor");
  }

  componentDidMount() {
    // вызывается после монтирования в DOM (render()), вызывает 1 раз в жизненном цикле
    console.log("componentDidMount()");
  }

  shouldComponentUpdate() {
    // фаза обновления, данные компонента State/Props обновятся в ответ на пользовальские события (click, txt)
    console.log("shouldComponentUpdate");
    return true; // по умолчанию возвращает true
  }

  componentDidUpdate() {
    // вызывается после повторного рендеринга компонент
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    // вызывается перед размонтированием компонента (удалением) - конец жизненного цикла
  }

  press() {
    let className = this.state.class === "off" ? "on" : "off";
    this.setState({ class: className });
  }

  render() {
    console.log("render()");
    return (
      <button onClick={this.press} className={this.state.class}>
        {this.state.label}
      </button>
    );
  }
}

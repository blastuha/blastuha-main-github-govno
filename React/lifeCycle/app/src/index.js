import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LifeCycleOfComponents from "./components/cycle";
import "./components/cycleStyle.css";

const App = () => {
  return <LifeCycleOfComponents />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


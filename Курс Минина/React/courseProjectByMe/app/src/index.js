import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TinderTable from "./components/TinderTable";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


const App = () => {
  return <TinderTable />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

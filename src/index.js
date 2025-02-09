import React from "react";
import ReactDOM from "react-dom/client";

import "./css/globals.css";
import "./css/styles.css";
import "./css/index.css";
import "./css/background.css";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

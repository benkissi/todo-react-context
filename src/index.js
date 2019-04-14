import React from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "./app-context";
import TodoApp from "./todo";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <TodoApp />
  </AppProvider>,
  rootElement
);

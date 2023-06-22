import React from "react";
import ReactDOM from "react-dom/client";

import TodoList from "./TodoList.js";
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <>
    <TodoList />
  </>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import App from "./AppCopyOne.jsx";
import ToDoList from "./ToDoList.jsx";
import TodoList2 from "./TodoList2.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    <ToDoList />
    {/* <TodoList2 /> */}
  </StrictMode>
);

import React from "react";
import { Todo } from "./types";
interface ToDoListItemProps {
  todo: Todo;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

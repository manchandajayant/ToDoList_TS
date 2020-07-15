import React from "react";
import { ToDoListItem } from "./TodoListItem";
import { Todo } from "./types";

const todos: Array<Todo> = [
  { text: "Code", complete: true },
  { text: "apply for jobs", complete: false },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoListItem todo={todos[0]} />
    </div>
  );
};

export default App;

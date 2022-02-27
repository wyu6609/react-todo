import React from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          //map through todos state array and render each todo element
          filteredTodos.map((todo) => {
            return (
              <Todo
                key={uuid()}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                text={todo.text}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

export default TodoList;

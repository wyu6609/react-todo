import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {
  //DeleteHandler
  const deleteHandler = () => {
    console.log("clicked");
    //onclick filter todos and update the new state of todos
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  //CompletedHandler
  const completeHandler = () => {
    console.log(todo);
    // map and invert object property boolean value of completed
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

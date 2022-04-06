import React from "react";
import { v4 as uuid } from "uuid";
const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  category,
  setCategory,
}) => {
  //text bar handler
  const textHandler = (event) => {
    setInputText(event.target.value);
  };

  // submitBtn textHandler
  const inputTextHandler = (event) => {
    event.preventDefault();
    console.log();
    //on submit--> set todo state (backend)
    setTodos([...todos, { text: inputText, completed: false, id: uuid() }]);
    //front end reset todo
    setInputText("");
  };
  // categoryhandler
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={textHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={inputTextHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={categoryHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

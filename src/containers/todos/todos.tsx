import React, { useState } from "react";

import { Todo } from "../../models";
export const Todos = () => {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    let todoObject = {
      id: todoList.length + 1,
      task: todo,
    };
    setTodoList([...todoList, todoObject]);
    setTodo("");
  };
  const handleTodoInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      handleAddTodo();
      console.log(event);
    }
  };
  return (
    <div>
      <div className="todoInput">
        <input
          type="text"
          name="todo"
          value={todo}
          onKeyDown={(event) => handleTodoInput(event)}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.task}</li>;
        })}
      </ul>
      {/* <Todo /> */}
    </div>
  );
};

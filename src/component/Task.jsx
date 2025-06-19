import React, { useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";

function Task({ tasks, handleTodo }) {
  const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(true);
  console.log(tasks);
  const handleChange = (todos) => {
    setOpen(false);
    setUpdate(todos);
  };

  return (
    <div>
      {open ? (
        tasks.map((todos, index) => (
          <div key={index} className="taskcontainer">
            <p> Title : {todos.title}</p>
            <h2> Description : {todos.description}</h2>
            <div>
              {" "}
              <button onClick={() => handleChange(todos)}>edit</button>
            </div>
            <div>
              <button className="task-button" onClick={() => handleTodo(todos)}>
                Mark as Done
              </button>
            </div>
          </div>
        ))
      ) : (
        <Edit update={update} />
      )}
    </div>
  );
}
export default Task;

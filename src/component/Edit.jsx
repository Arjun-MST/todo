import React, { useState } from "react";

function Edit({ update }) {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const handleUpdate = async () => {
    const Change = await fetch(
      `https://api.freeapi.app/api/v1/todos/${update._id}`,
      {
        body: JSON.stringify({
          title: input,
          description: description,
        }),
        method: "PATCH",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    const data = await Change.json();
    console.log(data);
  };

  return (
    <div className="editcontainer">
      <p> Title :</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter your task"
        type="text"
      ></input>
      <h2> Description : </h2>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={des}
        placeholder="Enter your task"
        type="text"
      ></input>
      <div>
        <button onClick={handleUpdate} className="task-button">
          submit
        </button>
      </div>
    </div>
  );
}

export default Edit;

import { useEffect, useState } from "react";

import Task from "../component/Task";
function Home() {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTodo();
  }, []);

  const handleChange = async () => {
    const response = await fetch("https://api.freeapi.app/api/v1/todos/", {
      method: "POST",
      body: JSON.stringify({
        title: input,
        description: description,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setTasks((prev) => [...prev, data?.data]);
    setInput(" ");
    setDescription(" ");
  };
  const fetchTodo = async () => {
    const response = await fetch("https://api.freeapi.app/api/v1/todos", {
      method: "GET",
      headers: { accept: "application/json" },
    });
    const data = await response.json();
    setTasks(data?.data);
  };

  const handleTodo = async (todos) => {
    // console.log(todos)
    const req = await fetch(
      `https://api.freeapi.app/api/v1/todos/${todos._id}`,
      { method: "DELETE", headers: { accept: "application/json" } }
    );
    const data = await req.json();
    console.log(data);
    setTasks((prev) => prev.filter((task) => task._id !== todos._id));
    alert(data.message);
  };
  return (
    <div className="main">
      <div className="container">
        <h2>Title</h2>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter your task"
          type="text"
        />
        <h2>Description</h2>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter your task"
          type="text"
        />
        <button onClick={handleChange}>Add Task</button>
        <Task tasks={tasks} handleTodo={handleTodo} />
      </div>
    </div>
  );
}
export default Home;

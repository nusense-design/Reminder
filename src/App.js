import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "attend Scrum", time: "10.30 morning",reminder:false },
    {
      id: 2,
      task: "Attend meeting at 11.30",
      time: "11.30 morning",reminder:true
    },
    { id: 3, task: "replace favicon", time: "First half after 12 pm",reminder:true },
  ]);


  const onClick = () => {
    console.log("btn clicked");
  };

  //  delete task
  const deleteTask = (id) => {
    const task = tasks.filter((task) => task.id !== id);
    setTasks(task);
  };

  //set  title
  const title = "Reminder";

  return (
    <div className="container">
      <Header title={title} onClick={onClick} />
      <hr />
      <Tasks deleteTask={deleteTask} tasks={tasks}  />
    </div>
  );
}

export default App;

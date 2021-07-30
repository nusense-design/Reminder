import React from "react";
import Task from "./Task";

const Tasks = ({ deleteTask, tasks }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} deleteTask={deleteTask}  />
        </div>
      ))}
    </>
  );
};

export default Tasks;

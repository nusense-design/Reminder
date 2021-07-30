import React from "react";
import { FaTrash } from "react-icons/fa";

const Task = ({ task, deleteTask, }) => {
  return (
    <div>
      <div className="task" key={task.id} >
        <div className="flex">
          <div className="flexChild">
            {task.task}{" "}
            <p key={task.id} style={{ color: "#303b47" }}>
              {task.time}
            </p>
          </div>
          <div className="flexChild">
            {
              <FaTrash
                style={{ color: "#454d66", height: "100%" }}
                cursor="pointer"
                onClick={() => deleteTask(task.id)}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineSave, AiOutlineEdit } from "react-icons/ai";

export default function TodoList2() {
  const [task, setTask] = useState("");
  const [Tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();

    if (task.trim() !== "") {
      setTasks([...Tasks, task]);
      setTask("");
    }
    console.log(task);
  }

  function deleteTask(index) {
    const updatedTasks = Tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTasks(index, task) {
    console.log("Editing....");
  }
  return (
    <div className="bg-blue-200  min-h-screen flex flex-col items-center justify-center">
      <div className="p-6 max-w-sm w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          To-Do List
        </h1>
        <form onSubmit={addTask} className="flex gap-2 mb-4 ">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="py-2 px-4 border border-2 border-blue-400"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-300 hover:opacity-60 transistion duration-500">
            Add
          </button>
        </form>

        <ul>
          {Tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-4 p-3 bg-gray-100 rounded-lg shadow-sm"
            >
              {task}

              <button className="flex gap-4">
                <AiOutlineDelete
                  size={20}
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteTask(index)}
                />
                <AiOutlineEdit
                  size={20}
                  className="text-red-500 hover:text-red-700"
                  onClick={() => editTasks(index, task)}
                />
              </button>
            </li>
          ))}

          {/* No Tasks Message */}
          {Tasks.length === 0 && (
            <p className="text-gray-500 text-center mt-6">
              No tasks yet. Add a new one!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineSave, AiOutlineEdit } from "react-icons/ai";

export default function TodoList2() {
  const [task, setTask] = useState("");
  const [Tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // Load tasks from local storage on component mount
  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (savedTasks) {
  //     setTasks(savedTasks);
  //   }
  // }, []);

  // Save tasks to local storage whenever Tasks change
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(Tasks));
  // }, [Tasks]);

  function addTask(e) {
    e.preventDefault();

    if (task.trim() !== "") {
      setTasks([...Tasks, task]);
      setTask(""); // Clear the input field
    }
  }

  function deleteTask(index) {
    const updatedTasks = Tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTasks(index, task) {
    setIsEditing(index); // Start editing the specific task
    setEditedTask(task); // Set the current task in the editing field
  }

  function saveTask(index) {
    const updatedTasks = Tasks.map((task, i) =>
      i === index ? editedTask : task
    );

    // Filter out empty tasks and delete them

    const noEmptyTasks = updatedTasks.filter((task) => task.trim() !== "");
    setTasks(noEmptyTasks);

    setIsEditing(null);
    setEditedTask("");
  }

  // function saveTasksToLocalStorage() {
  //   localStorage.setItem("tasks", JSON.stringify(Tasks));
  // }
  // function getTasksFromLocalStorage() {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (savedTasks) {
  //     setTasks(savedTasks);
  //   }
  // }
  return (
    <div className="overflow-y-scroll py-6 bg-blue-200 min-h-screen flex flex-col items-center justify-center">
      <div className="p-6 max-w-sm w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          To-Do List
        </h1>
        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="py-2 px-4 border border-2 border-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-300 hover:opacity-60 transition duration-500"
          >
            Add
          </button>
        </form>

        <ul>
          {Tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-4 p-3 bg-gray-100 rounded-lg shadow-sm"
            >
              {isEditing === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  placeholder="Edit here"
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <span className="overflowTask overflow-x-scroll">{task}</span>
              )}

              {isEditing === index ? (
                <button className="flex gap-4 px-3">
                  <AiOutlineSave
                    size={20}
                    className="text-red-500 hover:text-red-700"
                    onClick={() => saveTask(index)}
                  />
                  <AiOutlineDelete
                    size={20}
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteTask(index)}
                  />
                </button>
              ) : (
                <button className="flex gap-4 px-3">
                  <AiOutlineEdit
                    size={20}
                    className="text-red-500 hover:text-red-700"
                    onClick={() => editTasks(index, task)}
                  />
                  <AiOutlineDelete
                    size={20}
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteTask(index)}
                  />
                </button>
              )}
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

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
    <div className="overflow-y-scroll py-6 bg-blue-200 min-h-screen max-w-[80] lg:max-w-auto flex flex-col items-center justify-center">
      <div className="p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          To-Do List
        </h1>
        <form
          onSubmit={addTask}
          className="flex flex-col sm:flex-row gap-2 mb-4"
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="py-2 px-4 w-full sm:w-auto flex-1 border border-2 border-blue-400 rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 w-full sm:w-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-300 rounded-md hover:opacity-80 transition duration-500"
          >
            Add
          </button>
        </form>

        <ul>
          {Tasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center mb-4 p-3 bg-gray-100 rounded-lg shadow-sm"
            >
              {isEditing === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  placeholder="Edit here"
                  className="flex-1 w-full sm:w-auto border border-gray-300 rounded-lg p-2 mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <span className="overflowTask overflow-x-scroll break-words w-full sm:w-auto">
                  {task}
                </span>
              )}

              <div className="flex gap-4 mt-2 sm:mt-0">
                {isEditing === index ? (
                  <>
                    <AiOutlineSave
                      size={20}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => saveTask(index)}
                    />
                    <AiOutlineDelete
                      size={20}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => deleteTask(index)}
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineEdit
                      size={20}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => editTasks(index, task)}
                    />
                    <AiOutlineDelete
                      size={20}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => deleteTask(index)}
                    />
                  </>
                )}
              </div>
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

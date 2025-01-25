import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // Function to handle adding tasks
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Function to handle deleting a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to handle enabling editing mode
  const startEditing = (index, currentTask) => {
    setIsEditing(index);
    setEditedTask(currentTask);
  };

  // Function to save the edited task
  const saveTask = (index) => {
    const updatedTasks = tasks.map((t, i) => (i === index ? editedTask : t));
    setTasks(updatedTasks);
    setIsEditing(null);
    setEditedTask("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          To-Do List
        </h1>
        {/* Input Section */}
        <div className="flex mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a new task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Add
          </button>
        </div>
        {/* Task List */}
        <ul>
          <AnimatePresence>
            {tasks.map((t, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-center mb-4 p-3 bg-gray-100 rounded-lg shadow-sm"
              >
                {/* Editable Task */}
                {isEditing === index ? (
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ) : (
                  <span className="flex-1">{t}</span>
                )}
                <div className="flex space-x-2">
                  {isEditing === index ? (
                    <button
                      onClick={() => saveTask(index)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <AiOutlineSave size={20} />
                    </button>
                  ) : (
                    <button
                      onClick={() => startEditing(index, t)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <AiOutlineEdit size={20} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {/* No Tasks Message */}
        {tasks.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-center mt-6"
          >
            No tasks yet. Add a new one!
          </motion.p>
        )}
      </div>
    </div>
  );
}

import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Edit an existing task
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        removeTask,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

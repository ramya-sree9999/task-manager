import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, darkMode, setDarkMode }}>
      {children}
    </TaskContext.Provider>
  );
};
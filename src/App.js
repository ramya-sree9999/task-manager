import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [filter, setFilter] = useState('All'); // State to manage filter (All, Completed, Pending)

  // Load tasks from localStorage when the app initializes
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they are updated
  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) =>
    filter === 'All'
      ? true
      : filter === 'Completed'
      ? task.completed
      : !task.completed
  );

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
      </div>

      {/* Task Form Component */}
      <TaskForm addTask={addTask} />

      {/* Task List Component */}
      <TaskList
        tasks={filteredTasks} // Pass only filtered tasks
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

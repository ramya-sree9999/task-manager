import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [filter, setFilter] = useState('All'); // State to manage filter (All, Completed, Pending)
  const [priorityFilter, setPriorityFilter] = useState('All'); // Filter for priority (All, High, Medium, Low)
  const [editingTask, setEditingTask] = useState(null); // State to handle the editing task

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

  // Edit an existing task
  const editTask = (task) => {
    setEditingTask(task); // Set the task to be edited
  };

  // Update an edited task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task === editingTask ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null); // Close the edit mode
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
  const filteredTasks = tasks.filter((task) => {
    // First apply the completion filter
    const filterByCompletion =
      filter === 'All'
        ? true
        : filter === 'Completed'
        ? task.completed
        : !task.completed;

    // Then apply the priority filter
    const filterByPriority =
      priorityFilter === 'All' ? true : task.priority === priorityFilter;

    return filterByCompletion && filterByPriority;
  });

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Filter Buttons for Completion */}
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
      </div>

      {/* Filter Buttons for Priority */}
      <div>
        <button onClick={() => setPriorityFilter('All')}>All Priorities</button>
        <button onClick={() => setPriorityFilter('High')}>High</button>
        <button onClick={() => setPriorityFilter('Medium')}>Medium</button>
        <button onClick={() => setPriorityFilter('Low')}>Low</button>
      </div>

      {/* Task Form Component */}
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
      />

      {/* Task List Component */}
      <TaskList
        tasks={filteredTasks} // Pass only filtered tasks
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask} // Pass editTask function to TaskItem
      />
    </div>
  );
}

export default App;

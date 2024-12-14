import React, { useState, useEffect } from 'react';
import '../App.css';

function TaskForm({ addTask, updateTask, editingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium'); // Default priority

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = { title, description, dueDate, completed: false, priority };

    if (editingTask) {
      // If we're editing, update the task
      updateTask({ ...newTask, completed: editingTask.completed });
    } else {
      // If we're adding, create a new task
      addTask(newTask);
    }

    // Reset form after submission
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;

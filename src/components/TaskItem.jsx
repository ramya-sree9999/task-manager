import React from 'react';
import '../App.css';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? 'gray' : 'black',
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.dueDate && <p>Due Date: {task.dueDate}</p>}
      <button onClick={toggleComplete}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;

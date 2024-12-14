import React from 'react';
import '../App.css';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  return (
    <div
      className={`task-item ${task.priority.toLowerCase()}-priority`}
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? 'gray' : 'black',
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.dueDate && <p>Due Date: {task.dueDate}</p>}
      <p>Priority: {task.priority}</p>
      <button onClick={toggleComplete}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={deleteTask}>Delete</button>
      <button onClick={() => editTask(task)}>Edit</button>
    </div>
  );
}

export default TaskItem;

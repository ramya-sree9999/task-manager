import React from 'react';
import TaskItem from './TaskItem';
import '../App.css';

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
          editTask={() => editTask(task)} // Pass the edit function to TaskItem
        />
      ))}
    </div>
  );
}

export default TaskList;

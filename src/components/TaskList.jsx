import React from 'react';
import TaskItem from './TaskItem';
import '../App.css';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;

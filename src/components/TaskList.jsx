// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete, onDeletePermanently }) => {
  return (
    <div>
      
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onDeletePermanently={onDeletePermanently}
        />
      ))}
    </div>
  );
};

export default TaskList;

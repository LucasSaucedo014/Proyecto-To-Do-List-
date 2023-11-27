// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete, onDeletePermanently, setTasks }) => {
  return (
    <div>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onDeletePermanently={onDeletePermanently}
          setTasks={setTasks} 
        />
      ))}
    </div>
  );
};

export default TaskList;

// src/components/TaskItem.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const TaskItemWrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    flex-grow: 1;
    margin-right: 10px;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  }

  button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: #bd2130;
    }
  }
`;


const TaskItem = ({ task, onToggleComplete, onDelete, onDeletePermanently }) => {
    const [completed, setCompleted] = useState(task.completed);
  
    const handleToggleComplete = () => {
      setCompleted(!completed);
      onToggleComplete(task.id);
    };
  
    const handleDeletePermanently = () => {
      onDeletePermanently(task.id);
    };
  
    return (
      <TaskItemWrapper completed={completed}>
        <span>{task.text}</span>
        {!task.deleted && (
          <button onClick={handleToggleComplete}>Tarea Completada</button>
        )}
        <button onClick={() => (task.deleted ? handleDeletePermanently() : onDelete(task.id))}>
          {task.deleted ? 'Eliminar Permanentemente' : 'Eliminar'}
        </button>
      </TaskItemWrapper>
    );
  };
  
  export default TaskItem;
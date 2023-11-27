import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const TaskItemWrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: black;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    flex-grow: 1;
    margin-right: 10px;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? 'green' : 'inherit')};
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

  .botonCompletado {
    background-color: #008000;
    margin-right: 10px;
    &:hover {
      background-color: #0a4b0a;
    }
  }
`;

const TaskItem = ({ task, onToggleComplete, onDelete, onDeletePermanently }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggleComplete = () => {
    const newCompletedState = !completed;

    // Mostrar la alerta de SweetAlert2 al completar/desmarcar la tarea
    Swal.fire({
      position: 'top-end',
      icon: newCompletedState ? 'success' : 'warning',
      title: newCompletedState ? 'Tarea Completada' : 'Tarea Desmarcada',
      showConfirmButton: false,
      timer: 1500,
    });

    setCompleted(newCompletedState);
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);

    // Mostrar la alerta de SweetAlert2 al eliminar la tarea
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Tarea eliminada',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleDeletePermanently = () => {
    onDeletePermanently(task.id);
  };

  return (
    <TaskItemWrapper completed={completed}>
      <span>
        {task.text} {completed && '(completado)'}
      </span>
      {!task.deleted && (
        <button className='botonCompletado' onClick={handleToggleComplete}>
          {completed ? '✔️ Desmarcar Tarea' : '✔️ Completar Tarea'}
        </button>
      )}
      <button onClick={() => (task.deleted ? handleDeletePermanently() : handleDelete())}>
        {task.deleted ? 'Eliminar Permanentemente' : '❌ Eliminar Tarea'}
      </button>
    </TaskItemWrapper>
  );
};

export default TaskItem;
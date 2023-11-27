import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const FormWrapper = styled.form`
  width: 350px;
  margin: auto;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 7px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    color: white;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #218838;
    }
  }
`;

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    onAddTask(taskText);
    setTaskText('');

    // Mostrar la alerta de SweetAlert2 al agregar la tarea
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tarea agregada exitosamente',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Nueva Tarea:
        <input type="text" value={taskText} onChange={handleInputChange} />
      </label>
      <button type="submit">Agregar ➕</button>
    </FormWrapper>
  );
};

export default TaskForm;
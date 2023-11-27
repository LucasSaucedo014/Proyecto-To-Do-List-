// src/components/TaskForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  input {
    padding: 5px;
    margin-right: 10px;
  }

  button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 5px 10px;
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
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Nueva Tarea:
        <input type="text" value={taskText} onChange={handleInputChange} />
      </label>
      <button type="submit">Agregar</button>
    </FormWrapper>
  );
};

export default TaskForm;

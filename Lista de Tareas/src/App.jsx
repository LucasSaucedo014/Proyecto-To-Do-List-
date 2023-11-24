// src/App.jsx
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, text: 'Task 1', completed: false, deleted: false },
    // { id: 2, text: 'Task 2', completed: true, deleted: false },
    // Agrega más tareas según sea necesario
  ]);

  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed', 'deleted'

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, deleted: true } : task))
    );
  };

  const handleAddTask = (taskText) => {
    const newTask = { id: tasks.length + 1, text: taskText, completed: false, deleted: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed && !task.deleted;
    } else if (filter === 'completed') {
      return task.completed && !task.deleted;
    } else if (filter === 'deleted') {
      return task.deleted;
    }
    return !task.deleted;
  });

  return (
    <AppWrapper>
      <h1 className="logo react">Lista de Tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="card">
        <div>
          Filtrar:
          <button onClick={() => setFilter('all')}>Todas</button>
          <button onClick={() => setFilter('active')}>Activas</button>
          <button onClick={() => setFilter('completed')}>Completadas</button>
          <button onClick={() => setFilter('deleted')}>Eliminadas</button>
        </div>
        <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
      </div>
    </AppWrapper>
  );
};

export default App;

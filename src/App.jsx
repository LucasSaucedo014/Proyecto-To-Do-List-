// src/App.jsx
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import styled from 'styled-components';
import './App.css';
import Footer from './components/Footer';

// Se utiliza styled-components para aplicar estilos al contenedor principal de la aplicación.
const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

// Definición del componente funcional principal de la aplicación.
const App = () => {
  // Estado para almacenar la lista de tareas. Inicialmente, la lista está vacía.
  const [tasks, setTasks] = useState([]);

  // Estado para gestionar el filtro actual aplicado a la lista de tareas.
  // Puede tener los valores 'all', 'active', 'completed', 'deleted'.
  const [filter, setFilter] = useState('all');

  // Función para manejar el cambio de estado de completitud de una tarea.
  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para manejar la marcación de una tarea como eliminada.
  const handleDelete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, deleted: true } : task))
    );
  };

  // Función para añadir una nueva tarea a la lista.
  const handleAddTask = (taskText) => {
    const newTask = { id: tasks.length + 1, text: taskText, completed: false, deleted: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Filtrar las tareas según el filtro actual.
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

  // Renderizar la interfaz de usuario de la aplicación.
  return (
    <AppWrapper>
      <h1 className="logo react">Lista de Tareas</h1>
      {/* Componente para añadir nuevas tareas. */}
      <TaskForm onAddTask={handleAddTask} />
      <div className="card">
        <div>
          {/* Botones para cambiar el filtro de visualización de tareas. */}
          Filtrar:
          <button onClick={() => setFilter('all')}>Todas</button>
          <button onClick={() => setFilter('active')}>Activas</button>
          <button onClick={() => setFilter('completed')}>Completadas</button>
          <button onClick={() => setFilter('deleted')}>Eliminadas</button>
        </div>
        {/* Componente para mostrar la lista de tareas. */}
        <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
      </div>
      <Footer />
    </AppWrapper>
  );
};

// Exportar el componente principal de la aplicación.
export default App;
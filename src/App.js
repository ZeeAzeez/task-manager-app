import React from 'react';
import TaskList from './components/TaskList';
// import TaskItem from './components/TaskItem';
import AddTaskForm from './components/AddTaskForm';
// import EditTaskForm from './components/EditTaskForm';
// import DeleteTask from './components/DeleteTask';
import './App.css';



const App = () => {
  return (
    <div>
      <h1>Task Manager App</h1>
      <TaskList />
      <AddTaskForm />
      {/* Render other components here */}
    </div>
  );
};

export default App;
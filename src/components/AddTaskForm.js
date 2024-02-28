import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!name || !dueDate) return;
        onAddTask({ name, description, dueDate });
        setName('');
        setDescription('');
        setDueDate('');
      };

      return (
        <div>
          <h2>Add Task</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            <button type="submit">Add Task</button>
          </form>
        </div>
      );
    };
    
export default AddTaskForm;
import React, { useState } from 'react';

const EditTaskForm = ({ task, onUpdateTask }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateTask({ ...task, name, description, dueDate });
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
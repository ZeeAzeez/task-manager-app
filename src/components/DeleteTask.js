import React from 'react';

const DeleteTask = ({ onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete();
    }
  };

  return (
    <button onClick={handleDelete}>Delete Task</button>
  );
};

export default DeleteTask;
import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
    return (
        <li>
             <span>{task.name}</span>
             <span>{task.description}</span>
             <span>{task.dueDate}</span>
            <button onClick={() => onComplete(task.id)}>Complete</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};
export default TaskItem;
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
    if (!tasks){
        return <div> No tasks yet...</div>
    }
    return (
        <div>
        <h2>Task List</h2>
        <ul>
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            />
        ))}
        </ul>
        </div>
    );
};
export default TaskList;
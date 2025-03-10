import React from 'react';
import '../App.css';

function Task({ title, description, deadline, priority }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Deadline:</strong> {deadline}</p>
      <div className="priority">Priority: {priority}</div>
    </div>
  );
}

export default Task;

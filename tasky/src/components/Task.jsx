import React from "react";
import "../App.css"; 

function Task({ title, description, deadline, priority, done, markDone, deleteTask }) {
  return (
    <div className="card" style={{ backgroundColor: done ? 'lightgrey' : '#5bb4c4' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{deadline}</p>
      <p>Priority: {priority}</p>
      <button onClick={markDone}>{done ? "Undo" : "Done"}</button> 
      <button className='deleteButton' onClick={deleteTask}>Delete</button> 
    </div>
  );
}

export default Task;


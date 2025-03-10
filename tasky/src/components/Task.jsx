import React from "react";
import '../App.css'; 

const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p> 
    </div>
  );
};

export default Task;

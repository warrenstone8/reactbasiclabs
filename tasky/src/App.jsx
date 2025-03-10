import React, { useState } from 'react';  
import './App.css';
import Task from './components/Task';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "High" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium" },
      { title: "Tidy up", description: "Organize the living room", deadline: "Today", priority: "Low" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task 
          key={index}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority} 
        />
      ))}
    </div>
  );
}

export default App;

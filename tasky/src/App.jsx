import React, { useState } from 'react';  
import './App.css';
import Task from './components/Task';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", description: "Clean the living room", deadline: "Today" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
          key={task.id}  
          title={task.title}
          description={task.description}
          deadline={task.deadline}
        />
      ))}
    </div>
  )
};

export default App;

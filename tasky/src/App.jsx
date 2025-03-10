import React from "react";
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Clean all the dishes and put them away." />
      <Task title="Laundry" deadline="Tomorrow" description="Wash, dry, and fold clothes." />
      <Task title="Tidy" deadline="Today" description="Pick up items around the house and organize." />
    </div>
  );
}

export default App;

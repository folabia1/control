import './App.css';
import React, { useState } from 'react';
import { NewTaskBox } from './components/NewTaskBox.js';
import { TasksArea } from './components/TasksArea.js';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks((prevTasks) => {
      return [...prevTasks, {title: title, completed: false}]
    });
  }

  const toggleCompleted = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => 
        {return index === i ? {title: task["title"], completed: !task["completed"]} : task}
      )
    })
  }

  const deleteTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task, i) => {return i !== index});
      return newTasks;
    })
  }

  return (
    <div className="App">
      <h1>Control</h1>
      <p className="tagline">The To-Do List App that puts you back in control</p>

      <NewTaskBox onSubmit={addTask} />
      <TasksArea tasks={tasks} onClickCompleted={toggleCompleted} onClickDelete={deleteTask} />
    </div>
  );
}

export default App;

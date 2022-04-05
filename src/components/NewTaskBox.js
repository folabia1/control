import React, { useState } from 'react';

export function NewTaskBox(props) {
  const [ taskName, setTaskName ] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(taskName);
    setTaskName("");
  }

  const handleChange = (event) => {
    setTaskName(event.target.value.slice(0,60));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="NewTaskBox" type="text" placeholder="New task..." value={taskName} onChange={handleChange} />
    </form>
  )
}
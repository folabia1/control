import React from 'react';

export function CompletedButton(props) {
  return (
    <button
      className="CompletedButton"
      style={{"backgroundColor": props.task["completed"] ? "blue" : "white"}}
      onClick={() => props.onClick()}>
    </button>
  )
}
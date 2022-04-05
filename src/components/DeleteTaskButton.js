import React from 'react';
import deleteIcon from '../assets/delete-icon-12.png'

export function DeleteTaskButton(props) {
  return (
    <button
      className="DeleteTaskButton"
      onClick={() => props.onClick()}>
      <img src={deleteIcon} alt='delete icon' />
    </button>
  )
}
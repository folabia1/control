import React from 'react';
import { DragToReorder } from './DragToReorder.js';
import { CompletedButton } from './CompletedButton.js';
import { DeleteTaskButton } from './DeleteTaskButton.js';

export function TasksArea(props) {
  return (
    <div className="TasksArea">
      { props.tasks.length === 0 ? <p>No tasks yet.</p> :
        props.tasks.map((task, index) => {
          return (
            <span className="individualTask" key={index}>
              <DragToReorder />
              <span className="innerTask">
                <CompletedButton task={task} onClick={() => props.onClickCompleted(index)} />
                <p>{task["title"]}</p>
              </span>
              <DeleteTaskButton task={task} onClick={() => props.onClickDelete(index)} />
            </span>
          )
        })
      }
    </div>
  )
}
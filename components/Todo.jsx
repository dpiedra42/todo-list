import { useState } from 'react';

export default function Todo(props) {
    return(
        <div>
            <label>
                <input type="checkbox" 
                       name={props.task} 
                       checked={props.completed}
                       onChange={() => props.toggleComplete(props.id)}
                />
                {props.task}
            </label>
            <button type='button' onClick={() => props.removeTodo(props.id)}>Delete</button>
        </div>
    )
}
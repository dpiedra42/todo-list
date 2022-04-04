import { useState } from 'react';

export default function Todo(props) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    return(
        <div>
            <label>
                <input type="checkbox" 
                       name={props.task} 
                       checked={checked}
                       onChange={handleChange}
                />
                {props.task}
            </label>
            <button type='button' onClick={() => props.removeTodo(props.id)}>Delete</button>
        </div>
    )
}
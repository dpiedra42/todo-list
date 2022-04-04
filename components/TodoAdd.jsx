import useInputState from '../hooks/useInput';

export default function TodoAdd({addTodo}) {
    const [val, handleChange, reset] = useInputState('');
    return(
        <div>
            <input type='text' placeholder="Add A Todo" value={val} onChange={(e) => handleChange(e)}/>
            <button type='button' onClick={() => {
                addTodo(val);
                reset();
            }}>
                Add
            </button>
        </div>
    )
}
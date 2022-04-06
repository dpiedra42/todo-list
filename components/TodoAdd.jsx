import useInputState from '../hooks/useInput';
import styled from '@emotion/styled';

export default function TodoAdd({addTodo}) {
    const [val, handleChange, reset] = useInputState('');
    return(
        <div>
            <AddTodo type='text' placeholder="Add A Todo" value={val} onChange={(e) => handleChange(e)}/>
            <SubmitButton type='button' onClick={() => {
                addTodo(val);
                reset();
            }}>
                Add
            </SubmitButton>
        </div>
    )
}

const AddTodo = styled.input`
    width: 20vw;
    height: 3vh;
    margin-right: 0.5vw;
    padding-left: 1vw;
    border: solid 0.2vw lightblue;
    border-radius: 1vw;
    font-size: 1vw;
    font-family: 'Quicksand', sans-serif;
`
const SubmitButton = styled.button`
    width: 3vw;
    font-size: 1vw;
    height: 3vh;
    background-color: lightblue;
    border: none;
    border-radius: 1vw;
    font-family: 'Quicksand', sans-serif;

    :hover {
        color: white;
    }
`
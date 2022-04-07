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
    width: 25vw;
    height: 3.8vh;
    margin-right: 0.5vw;
    padding-left: 1vw;
    border: solid 0.2vw rgb(53, 30, 41);
    border-radius: 1vw;
    font-size: 1.2vw;
    font-family: 'Quicksand', sans-serif;

    @media (max-width:780px)
      {
        font-size: 0.8rem;
        width: 50vw;
        height: 4vh;
        border: solid 0.2rem rgb(53, 30, 41);
        border-radius: 1rem;
      }
`
const SubmitButton = styled.button`
    width: 3.8vw;
    font-size: 1.2vw;
    height: 3.8vh;
    background-color: rgb(53, 30, 41);
    border: none;
    border-radius: 1vw;
    font-family: 'Quicksand', sans-serif;
    color: white;

    :hover {
       background-color: rgb(128, 49, 87);
    }

    @media (max-width:780px)
      {
        width: 8vw;
        font-size: 0.7rem;
        height: 4vh;
        border-radius: 0.8rem;
      }
`
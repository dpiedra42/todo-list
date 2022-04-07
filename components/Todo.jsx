import { useState } from 'react';
import styled from '@emotion/styled';

export default function Todo(props) {
    return(
        <TaskContainer BackColor={props.backColor}>
            <TaskDiv>
                <Task>
                    <InputBox type="checkbox" 
                        name={props.task} 
                        checked={props.completed}
                        onChange={() => props.toggleComplete(props.id)}
                    />
                    {props.task}
                </Task>
            </TaskDiv>
            <ButtonDiv>
                <DeleteButton type='button' onClick={() => props.removeTodo(props.id)}>Remove</DeleteButton>
            </ButtonDiv>
        </TaskContainer>
    )
}
const TaskContainer = styled.div`
    margin-bottom: 2vh;
    padding: 0.5vw;
    background-color: ${props => props.BackColor};
    border-radius: 0.8vw;
    width: 40vw;
    display: flex;
    justify-content: space-between;

    @media (max-width: 780px)
    {
        width: 60vw;
        margin-bottom: 1rem;
        padding: 0.5rem;
        border-radius: 1rem;
    }
`
const TaskDiv = styled.div`
    width: 70%;
    border-radius: 0.5vw;
`
const InputBox = styled.input`
    margin-right: 1vw;
    width: 1vw;
    height: 1.9vh;

    @media (max-width: 780px)
    {
        width: 1rem;
    }
`
const Task = styled.label`
    font-size: 1.5vw;
    padding-right: 1.5vw;

    @media (max-width: 780px)
    {
       padding-right: 0;
       font-size: 1rem;
    }
`
const ButtonDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`
const DeleteButton = styled.button`
    height: 4vh;
    font-size: 1.9vh;
    border: none;
    border-radius: 0.5vw;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;

    @media (max-width: 780px)
    {
       border-radius: 0.5rem;
    }
`
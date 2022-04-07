import { useState } from 'react';
import styled from '@emotion/styled';

export default function Todo(props) {
    const colors = [
        'rgb(109, 211, 206)', 
        'rgb(200, 233, 160)', 
        'rgb(247, 162,120)'
    ];

    return(
        <TaskContainer BackColor={colors[Math.floor(Math.random() * colors.length)]}>
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
`
const TaskDiv = styled.div`
    width: 70%;
    border-radius: 0.5vw;
`
const InputBox = styled.input`
    margin-right: 1vw;
    width: 1vw;
    height: 1.9vh;
`
const Task = styled.label`
    font-size: 1.5vw;
    padding-right: 1.5vw;
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
`
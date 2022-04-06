import { useState } from 'react';
import styled from '@emotion/styled';

export default function Todo(props) {
    return(
        <TaskContainer>
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
            <button type='button' onClick={() => props.removeTodo(props.id)}>Delete</button>
        </TaskContainer>
    )
}
const TaskContainer = styled.div`
    padding-bottom: 2vh;
    width: 30vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const TaskDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const InputBox = styled.input`
    margin-right: 1vw;
`
const Task = styled.label`
    font-size: 3.3vh;
    padding-right: 1.5vw;
    display: flex;
    flex-wrap: wrap;
`
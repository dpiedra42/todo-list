import { useState } from 'react';
import TodoAdd from './TodoAdd';
import DisplayTodo from './DisplayTodo';
import styled from '@emotion/styled';

export default function TodoApp() {
    const [items, setItems] = useState([
      {id: 0, task: "buy milk", completed: false},
      {id: 1, task: "buy eggs", completed: false}
    ]);
  
    const addTodo = (newTodoText) => {
        let newid = increaseId();
        if (newTodoText)
            setItems([...items, {id: newid, task: newTodoText, completed: false }]);
    };

    const increaseId = () => {
       const index = items.length - 1;
       if (index < 0)
        return 0;
       const prevId = items[index].id;
       const newId = prevId + 1;
       return newId;
    };

    const removeTodo = (todoId) => {
        const updatedTodos = items.filter(item => item.id !== todoId);
        setItems(updatedTodos);
    }
  
    const toggleComplete = (todoId) => {
        const updatedTodos = items.map(item => 
            item.id === todoId ? {...item, completed: !item.completed } : item 
        );
        setItems(updatedTodos);
    };

    return (
        <TodoAppContainer>
            <Title>Your Daily ToDo List</Title>
            <Caption>A little list to help keep you organized throughtout the day!</Caption>
            <TodoAdd addTodo={addTodo}/>
            <DisplayTodo todos={items} 
                         removeTodo={removeTodo}
                         toggleComplete={toggleComplete}
            />
        </TodoAppContainer>
    )
  }

  const TodoAppContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      height: 100vh;
      width: 50vw;
      @media (max-width:780px)
      {
        width: 90vw;
      }
  `
  const Title = styled.h1`
    margin: 0;
    padding: 5vh 0 5vh 0;
    font-size: 2.5vw;
    text-decoration: underline;

    @media (max-width:780px)
      {
        font-size: 1.8rem;
      }
`
  const Caption = styled.p`
      color: rgb(101, 101, 101);
      margin: 0;
      font-size: 1.2vw;
      padding-bottom: 3vh;

      @media (max-width:780px)
      {
        font-size: 0.9rem;
        padding-bottom: 2.5vh;
      }
  `
  
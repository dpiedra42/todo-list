import { useState } from 'react';
import TodoAdd from './TodoAdd';
import DisplayTodo from './DisplayTodo';

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
  
    return (
        <div>
            <h1>What&apos;s there ToDo today?</h1>
            <TodoAdd addTodo={addTodo}/>
            <DisplayTodo todos={items} removeTodo={removeTodo}/>
        </div>
    )
  }
  
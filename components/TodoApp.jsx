import { useState } from 'react';
import TodoAdd from './TodoAdd';
import DisplayTodo from './DisplayTodo';

export default function TodoApp() {
    const [items, setItems] = useState([
      {id: 1, task: "buy milk", completed: false},
      {id: 2, task: "buy eggs", completed: false}
    ]);
  
    const addTodo = (newTodoText) => {
        if (newTodoText)
            setItems([...items, {id: newTodoText, task: newTodoText, completed: false }]);
    };
  
    return (
        <div>
            <h1>What&apos;s there Todo?</h1>
            <TodoAdd addTodo={addTodo}/>
            <DisplayTodo todos={items}/>
        </div>
    )
  }
  
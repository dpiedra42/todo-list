import { useState } from 'react';

export default function TodoApp() {
    const [todoItem, setTodoItem] = useState('');
    const [items, setItems] = useState([
      "buy milk",
      "buy eggs"
    ]);
  
    const handleAdd = () => {
      if (todoItem){
        setItems([todoItem, ...items]);
        setTodoItem('');
      }
    }
  
    return (
      <div>
         <h1>What&apos;s there Todo?</h1>
         <div>
            <input type='text' value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
            <button type='button' onClick={handleAdd}>Add</button>
          </div>
          <ul>
            {items.map(item => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
      </div>
    )
  }
  
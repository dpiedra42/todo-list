import Todo from './Todo';

export default function DisplayTodo(props) {
    return(
        <div>
            <div>
                {props.todos.map(item => (
                    <Todo key={item.id} 
                          task={item.task} 
                          id={item.id}
                          completed={item.completed}
                          removeTodo={props.removeTodo}
                          toggleComplete={props.toggleComplete}
                    />
                ))}
            </div>
        </div>
    )
}
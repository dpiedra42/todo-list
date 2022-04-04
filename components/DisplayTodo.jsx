export default function DisplayTodo(props) {
    return(
        <div>
            <ul>
                {props.todos.map(item => (
                    <li key={item.id}>
                    {item.task}
                    </li>
                ))}
            </ul>
        </div>
    )
}
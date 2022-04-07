import Todo from './Todo';
import styled from '@emotion/styled';

export default function DisplayTodo(props) {
    return(
        <div>
            <TodoDiv>
                {props.todos.map(item => (
                    <Todo key={item.id} 
                          task={item.task} 
                          id={item.id}
                          backColor={item.color}
                          completed={item.completed}
                          removeTodo={props.removeTodo}
                          toggleComplete={props.toggleComplete}
                    />
                ))}
            </TodoDiv>
        </div>
    )
}

const TodoDiv = styled.div`
    padding: 2.5vw;

    @media (max-width: 780px)
    {
        padding: 2rem
    }
`
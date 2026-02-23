function Todo({todo}){
    return(
        <li key={todo.taskId}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.priority} PRIORITY</p>
            <h4>Due Date: {todo.dueDate}</h4>
        </li>
    )
}
export default Todo;
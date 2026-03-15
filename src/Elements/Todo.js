import { useState } from "react";
import Button from "./Button";
import TaskMenu from "./TaskMenu";

function Todo({todo,fetchTodos,setShowModal}){ //child of home
    const [menuOpen,setMenuOpen]=useState(false);

    const handleMenuOpen=()=>{
        menuOpen===true?setMenuOpen(false):setMenuOpen(true);
    }
    return(
        <li key={todo.taskId}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.priority} PRIORITY</p>
            <h4>Due Date: {todo.dueDate}</h4>
            <Button text={"More Options"} onClick={handleMenuOpen}/>
            {menuOpen && <TaskMenu todoId={todo.taskId} fetchTodos={fetchTodos} setShowModal={setShowModal}/>}
        </li>
    )
}
export default Todo;
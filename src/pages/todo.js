import { useState,useEffect } from "react";
import API from "../api/axios";
function Todo(){
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(false);
    //fetch todos list
    const fetchTodos=async()=>{
        try {
            setLoading(true);
            const res=await API.get("/todo/getTask");
            setTodos(res.data);
        } catch (error) {
            console.error("failed to fetch todos");
        } finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchTodos();
    },[]);
    return(
        <div>
            <ul className="todolist">
                {todos.map((todo)=>{
                    return(
                        <li key={todo.taskId}>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                            <h2>Status: {todo.status}</h2>
                            <h2>Priority: {todo.priority}</h2>
                            <h2>Due Date: {todo.dueDate}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Todo;
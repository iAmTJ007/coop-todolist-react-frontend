import API from "../api/axios";
import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { AuthContext } from "../context/AuthContext";
function PendingTab(){
    const [todos,setTodos]=useState([]);
    const {user}=useContext(AuthContext);
    async function fetchTodos() {
        try {
            const res=await API.get(`/todo/getTasks/${user}`)
            setTodos(res.data);
        } catch (error) {
            alert("error in fetching pending tasks");
        }
    }
    useEffect(()=>{
        fetchTodos();
    },[]);
    return(
        <div className="pending">
            <ul>
                {
                    todos.map((todo)=>{
                        return <li>{<Todo todo={todo}/>}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default PendingTab;
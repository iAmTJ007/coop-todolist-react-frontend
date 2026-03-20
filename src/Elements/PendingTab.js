import API from "../api/axios";
import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { AuthContext } from "../context/AuthContext";
import AddTaskModal from "./AddTaskModal";
function PendingTab(){
    const {user}=useContext(AuthContext);
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(false);
    const [showModal,setShowModal]=useState(null);
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
        <div className="pending">
                {
                    loading ? (
                        <h4>Loading tasks for the day</h4>
                    ) :(
                        <ul>
                            {todos.map((todo)=>
                                showModal!==todo.taskId?(<Todo todo={todo} fetchTodos={fetchTodos} setShowModal={setShowModal}/>)
                                        :<AddTaskModal setShowModal={setShowModal} fetchTodos={fetchTodos} task={todo}/>
                                    
                            )}
                        </ul>
                    )
                }
        </div>
    )
}
export default PendingTab;
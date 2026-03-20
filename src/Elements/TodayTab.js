import { useState,useEffect } from "react";
import API from "../api/axios";
import DatePickerField from "./DatePickerField";
import Todo from "./Todo";
import AddTaskModal from "./AddTaskModal";

function TodayTab(){
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(false);
    const [date,setDate]=useState(new Date());
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

    const selectedDate = date.toLocaleDateString("en-CA");
    return(
        <div className="today">

                <DatePickerField
                    value={date}
                    onChange={(date)=>setDate(date)}
                />

                {
                    loading ? (
                        <h4>Loading tasks for the day</h4>
                    ) :(
                        <ul>
                            {todos.map((todo)=>
                                todo.createDate === selectedDate
                                    ?showModal!==todo.taskId?(<Todo todo={todo} fetchTodos={fetchTodos} setShowModal={setShowModal}/>)
                                        :<AddTaskModal setShowModal={setShowModal} fetchTodos={fetchTodos} task={todo}/>
                                    : ""
                            )}
                        </ul>
                    )
                }
                {
                    showModal===-1 ? (
                        <AddTaskModal
                            setShowModal={setShowModal}
                            fetchTodos={fetchTodos}
                        />
                    ) : <button onClick={()=>setShowModal(-1)}>
                            Add Task
                        </button>
                }
            </div>
    )
}
export default TodayTab;
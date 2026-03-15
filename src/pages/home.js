import { useState,useEffect } from "react";
import API from "../api/axios";
import Navbar from "../Elements/Navbar";
import Todo from "../Elements/Todo";
import DatePickerField from "../Elements/DatePickerField";
import AddTaskModal from "../Elements/AddTaskModal";
import '../index.css';
function Home(){
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(false);
    const [date,setDate]=useState(new Date());
    const [showModal,setShowModal]=useState("none");
    
    const selectedDate = date.toLocaleDateString("en-CA");

    const fetchTodos=async()=>{
        try {
            setLoading(true);
            const res=await API.get("/todo/getTask");
            console.log(res);
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
        <div className="screen">
            <Navbar/>

            <div className="home">

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
                                    ?showModal!=="edit"?(<Todo todo={todo} fetchTodos={fetchTodos} setShowModal={setShowModal}/>)
                                        :<AddTaskModal setShowModal={setShowModal} fetchTodos={fetchTodos} task={todo}/>
                                    : ""
                            )}
                        </ul>
                    )
                }
                {
                    showModal==="add" ? (
                        <AddTaskModal
                            setShowModal={setShowModal}
                            fetchTodos={fetchTodos}
                        />
                    ) : <button onClick={()=>setShowModal("add")}>
                            Add Task
                        </button>
                }
            </div>
        </div>
    )
}
export default Home;
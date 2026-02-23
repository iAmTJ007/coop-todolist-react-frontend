import { useState,useEffect } from "react";
import API from "../api/axios";
import Navbar from "../Elements/Navbar";
import Todo from "../Elements/Todo";
import DatePickerField from "../Elements/DatePickerField";
function Home(){
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(false);
    const [date,setDate]=useState(new Date()); //yyyy-mm-dd
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
        <div className="home">
            <Navbar/>  
            <DatePickerField value={date} onChange={(date)=>setDate(date)}/>
            <ul>
                {todos.map((todo)=>{
                    return(
                        todo.createDate===date.toISOString().split("T")[0]?<Todo todo={todo}/>:null
                    )
                })}
            </ul>   
        </div>
    )
}
export default Home;
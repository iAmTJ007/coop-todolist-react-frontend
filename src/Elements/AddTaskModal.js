import API from "../api/axios";
import { useState } from "react";
import Button from "./Button";

function AddTaskModal({setShowModal,fetchTodos}){
    const [form,setForm]=useState({title:"",description:"",priority:"LOW",dueDate:""});

    const handleAddTask=async(e)=>{
        e.preventDefault();
        try {
            const res=await API.post("/todo/createTask",form);
            alert("task created successfully");
            setShowModal(false);
            fetchTodos();
        } catch (error) {
            alert("failed to create task");
        }
    }
    const handleCancel=()=>{
        setShowModal(false);
    }
    
    return(
        <div className="addtaskmodal">
            <form onSubmit={handleAddTask}>
                <input placeholder="title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
                <input placeholder="description" onChange={(e)=>setForm({...form,description:e.target.value})}/>
                <select placeholder="priority" onChange={(e)=>setForm({...form,priority:e.target.value})}>
                    <option value="LOW">Low Priority</option>
                    <option value="MEDIUM">Medium Priority</option>
                    <option value="HIGH">High Priority</option>
                </select>
                <input placeholder="duedate" type="date" onChange={(e)=>setForm({...form,dueDate:e.target.value})}/>
                <Button text={"Add Task"}/>
            </form>
            <Button text={"Cancel"} onClick={handleCancel}/>
            
        </div>
    )
}
export default AddTaskModal;
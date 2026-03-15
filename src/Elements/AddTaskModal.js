import API from "../api/axios";
import { useEffect, useState } from "react";
import Button from "./Button";

function AddTaskModal({setShowModal,fetchTodos,task}){
    const [form,setForm]=useState({
        title: task?.title || "",
        description: task?.description || "",
        priority: task?.priority || "LOW",
        dueDate: task?.dueDate || ""
    });

    const handleAddTask=async(e)=>{
        e.preventDefault();
        if(!task){
            try {
                const res=await API.post("/todo/createTask",form);
                alert("task created successfully");
                setShowModal("none");
                fetchTodos();
            } catch (error) {
                alert("failed to create task");
            }
        }
        else{
            try {
                const res=await API.put(`/todo/updateTask/${task.taskId}`,form);
                alert("task edited successfully");
                setShowModal("none");
                fetchTodos();
            } catch (error) {
                alert("failed to edit task");
            }
        }
    }
    function handleCancel(){
        setShowModal("none");
    }
    
    return(
        <div className="addtaskmodal">
            <form onSubmit={handleAddTask}>
                <input placeholder="title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
                <input placeholder="description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}/>
                <select placeholder="priority" value={form.priority} onChange={(e)=>setForm({...form,priority:e.target.value})}>
                    <option value="LOW">Low Priority</option>
                    <option value="MEDIUM">Medium Priority</option>
                    <option value="HIGH">High Priority</option>
                </select>
                <input placeholder="duedate" type="date" value={form.dueDate} onChange={(e)=>setForm({...form,dueDate:e.target.value})}/>
                <Button text={task?"Edit Task":"Add Task"}/>
            </form>
            <Button text={"Cancel"} onClick={handleCancel}/>
            
        </div>
    )
}
export default AddTaskModal;
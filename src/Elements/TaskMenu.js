import Button from "./Button";
import API from "../api/axios";
function TaskMenu({todoId,fetchTodos}){  //child of todo
    const handleEdit=async(e)=>{
        e.preventDefault();
    }
    const handleDelete=async(e)=>{
        e.preventDefault();
        try {
            await API.delete(`/todo/deleteTask/${todoId}`)
            alert("Task deleted successfully");
            fetchTodos();
        } catch (error) {
            alert(error);
        }
    }
    return(
        <div className="taskmenu">
            <Button text={"Edit Task"} onClick={handleEdit}/>
            <Button text={"Delete Task"} onClick={handleDelete}/>
        </div>
    )
}
export default TaskMenu;
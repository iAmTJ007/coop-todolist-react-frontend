import Button from "./Button";
import API from "../api/axios";
function TaskMenu({todoId,fetchTodos,setShowModal}){  //child of todo
    const handleEdit=async(e)=>{ //opens the addtaskmodal menu which was for edit case
        setShowModal(todoId);
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
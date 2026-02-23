import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register(){
    const {register} = useContext(AuthContext);
    const [form,setForm]=useState({email:"",username:"",password:"",confirmPassword:""});
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!form.email||!form.username||!form.password||!form.confirmPassword){
            alert("fill all fields")
            return;
        }
        if(form.password!==form.confirmPassword){
            alert("passwords not matching");
            return;
        }
        try {
            await register({email:form.email,username:form.username,password:form.password});
            alert("registration successful");
            navigate("/login");
        } catch (error) {
            alert("register fail");
        }
        
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="email" onChange={(e)=>setForm({...form,email:e.target.value})}></input>
            <input placeholder="username" onChange={(e)=>setForm({...form,username:e.target.value})}></input>
            <input placeholder="password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})}></input>
            <input placeholder="confirm password"></input>
            <button type="submit">Register</button>
        </form>
        <p>
        Already have an account?
            <a href="/login">Login</a>
        </p>
        </>
        
    )
}
export default Register
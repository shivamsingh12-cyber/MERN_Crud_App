import React, { useEffect, useState } from 'react'
import "./updateuser.css"
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
    const users = {
        name:"",
        age:"",
        gender:""
    };
    const [user, setUser]=useState(users);
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
      
      axios.get(`http://localhost:3000/getdata/${id}`).then((response)=>{
        setUser(response.data);
       
      }).catch((err)=>{
        console.log(err);
      });
    },[id])

    const inputHandler = (e)=>{
          const {name,value}=e.target;
        console.log(name,value)
          setUser({...user,[name]:value })
    }

    const submitForm = async (e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:3000/update/${id}`,user).then((response)=>{
        console.log('User updated Successfully');
        navigate("/");
      }).catch((err)=>{
        console.log(err);
      })
    }
  return (
    <div className="addUser">
      <Link to="/" type='button' className='btn btn-secondary'>
        Back <i className="fa-solid fa-backward"></i>
      </Link>
      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
           type="text"
           name="name" 
           value={user.name}
           onChange={inputHandler}
           autoComplete='off' 
           placeholder='Enter your Name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="age">Age</label>
          <input 
          type="text" 
          name="age" 
           value={user.age}
          autoComplete='off' 
          onChange={inputHandler}
          placeholder='Enter your Name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="gender">Gender</label>
      Male  <input type="radio" name="gender"
      checked={user.gender === "male"}
      value="male"  
         onChange={inputHandler} />
      Female  <input type="radio" name="gender"
        checked={user.gender === "female"}
      value="female" id="" 
         onChange={inputHandler} />
        </div>
        <div className="inputGroup">
        <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser

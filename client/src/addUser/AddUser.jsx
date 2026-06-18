import React from 'react'
import "./AddUser.css"
import {Link} from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">
      <Link to="/" type='button' className='btn btn-secondary'>
        Back <i class="fa-solid fa-backward"></i>
      </Link>
      <h3>Add New User</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" autoComplete='off' placeholder='Enter your Name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="age">Age</label>
          <input type="text" name="name" autoComplete='off' placeholder='Enter your Name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="gender">Gender</label>
      Male  <input type="radio" name="gen" value="male" id="" />
      Female  <input type="radio" name="gen" value="female" id="" />
        </div>
        <div className="inputGroup">
        <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser

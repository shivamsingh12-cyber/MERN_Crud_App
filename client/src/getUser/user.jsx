import React from "react";
import "./user.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const fetchData= async ()=>{
      try {
    const response= await axios.get("http://localhost:3000/getall");
        setUsers(response.data);
      } catch (error) {
        console.log('Error while fetching', error);
      }
    };
    fetchData();
  },[])
  return (
    <>
      <div className="userTable">
        <Link to="/add" type="button" className="btn btn-success btn-sm"> <i className="fa-solid fa-user-plus"></i> </Link>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user,index)=>{
                  return (
                   <tr>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td><button type="button" className="btn btn-primary btn-sm"><i className="fa-solid fa-pen-to-square"></i></button>  <button type="button" className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button></td>
                </tr>
                  )
                })}
             
              </tbody>
            </table>
      </div>
    </>
  );
};

export default User;

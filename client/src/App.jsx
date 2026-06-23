import { useState } from 'react'
import "./App.css"
import User from "./getUser/user.jsx"
import AddUser from './addUser/AddUser.jsx';
import UpdateUser from './updateUser/updateUser.jsx';
import {RouterProvider,createBrowserRouter} from "react-router-dom";


function App() {
  
const route=createBrowserRouter([
 {
   path:"/",
  element:<User/>
},{
  path:"/add",
  element:<AddUser/>
},
{
   path:"/update/:id",
  element:<UpdateUser/>
},
])

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App

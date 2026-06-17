import { useState } from 'react'
import "./App.css"
import User from "./getUser/user.jsx"
import AddUser from './addUser/adduser.jsx';
import {RouterProvider,createBrowserRouter} from "react-router-dom";


function App() {
  
const route=createBrowserRouter([
 {
   path:"/",
  element:<User/>
},{
  path:"/add",
  element:<AddUser/>
}
])

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App

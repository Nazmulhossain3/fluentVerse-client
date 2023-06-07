import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Instructors from './Pages/Instructors';
import Classes from './Pages/Classes';
import Dashboard from './Layout/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Component/Provider/AuthProvider';
import AddClass from './Layout/Dashboard/Instructor/AddClass';
import MyClass from './Layout/Dashboard/MyClass';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path :'/Instructors',
        element : <Instructors></Instructors>
      },
      {
        path : '/classes',
        element : <Classes></Classes>
      },
     
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/addClass',
        element : <AddClass></AddClass>
      }
    ]
  },
  {
    path : 'dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : 'addClass',
        element : <AddClass></AddClass>
      },
      {
        path : 'myClass',
        element : <MyClass></MyClass>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

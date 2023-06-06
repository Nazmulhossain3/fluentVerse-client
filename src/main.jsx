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
        path : '/dashboard',
        element : <Dashboard></Dashboard>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

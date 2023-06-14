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
import ManageUsers from './Layout/Dashboard/Admin/ManageUsers';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MySelectedClass from './Layout/Dashboard/Students/MySelectedClass';
import MyEnrollClass from './Layout/Dashboard/Students/MyEnrollClass';
import ManageClasses from './Layout/Dashboard/Admin/ManageClasses';
import Payment from './Layout/Dashboard/Students/Payment/Payment';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import PaymentHistory from './Layout/Dashboard/Students/Payment/PaymentHistory';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
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
      },
      {
       path : 'manageUsers',
       element : <ManageUsers></ManageUsers>
      },
      {
        path : 'manageClasses',
        element : <ManageClasses></ManageClasses>
      },
      {
        path : 'mySelectedClass',
        element : <MySelectedClass></MySelectedClass>
      },
      {
        path : 'myEnrollClass',
        element : <MyEnrollClass></MyEnrollClass>
      },
      {
        path : 'payment/:id',
        element : <Payment></Payment>,
        loader : ({params})=> fetch(`http://localhost:5000/classes/${params.id}`)
      },
      {
        path : 'paymentHistory',
        element :<PaymentHistory></PaymentHistory>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> 
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)

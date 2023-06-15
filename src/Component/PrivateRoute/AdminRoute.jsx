/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({children}) => {
    const isAdmin = useAdmin()
    const {loading} = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

   
    if(isAdmin){
    
        return children

    }
   
    else{
   
        return  <Navigate to='/login' state={{from : location}} replace ></Navigate>
    }
   
};

export default AdminRoute;
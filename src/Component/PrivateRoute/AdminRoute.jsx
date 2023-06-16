/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({ children }) => {
  const [isAdmin,adminLoading] = useAdmin();
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading || adminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (isAdmin && user) {
    return children;
  } 
  
  else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default AdminRoute;

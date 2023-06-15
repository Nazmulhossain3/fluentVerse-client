import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Component/Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
    navigate('/login')
  }
   
  
  return (
        <div className="navbar shadow-2xl px-6 sticky bg-base-100">
        <div className="navbar-start">
          <p className="font-serif">Fluentverse Academy</p>
        </div>
        <div className="navbar-center font-serif">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to='/Instructors' className="btn btn-ghost normal-case text-xl">Instructors</Link>
          <Link to='/classes' className="btn btn-ghost normal-case text-xl"> Classes</Link>
         {
          user?.email && 
          <Link to='/dashboard' className="btn btn-ghost normal-case text-xl"> Dashboard</Link>

         }
         
         
         
          {
            user && <Link onClick={handleLogOut}  className="btn btn-ghost normal-case text-xl">LogOut</Link>

          }
      
        </div>
        <div className="navbar-end">
          
         {
          user?.email ?    
          <div className="w-10 rounded-full">
                <img
                 className="rounded-full"
                  src={user?.photoURL}
                />
         </div>
          :
         
         <Link to='/login'>
          <button className="border-2 font-serif rounded-lg btn-primary btn-outline px-4">
            Login
          </button> 
          </Link>
         }
          
        </div>
      </div>
    );
};

export default Navbar;
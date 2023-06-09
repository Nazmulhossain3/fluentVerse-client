import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import useAdmin from "../../Component/Hook/useAdmin";
import useInstructor from "../../Component/Hook/useInstructor";
import { space } from "postcss/lib/list";

const Dashboard = () => {
    const isAdmin = useAdmin()
    const isInstructor = useInstructor()
 
 
    return (
        <div>
            <Navbar></Navbar>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col mx-auto mt-6">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
    
         
          
             <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
           <li><Link to='/dashboard/manageClasses'>Manage Classes</Link></li>
          
       
         
             <li><Link to='/dashboard/addClass'>Add Class</Link></li>
            <li><Link to='/dashboard/myClass'>My Class</Link></li>
          
     
   
           
                <li><Link to='/dashboard/mySelectedClass'>My Selected Classes</Link></li>
               <li><Link to='/dashboard/myEnrollClass'>My Enrolled Classes</Link></li>
           
        
    
</ul>
  
  </div>
</div>
     
     
     </div>
       
    );
};

export default Dashboard;
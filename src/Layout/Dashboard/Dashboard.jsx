import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import useAdmin from "../../Component/Hook/useAdmin";
import useInstructor from "../../Component/Hook/useInstructor";
import { FaBookOpen, FaBookReader, FaCheckCircle, FaChessQueen, FaHistory, FaListAlt, FaUser } from "react-icons/fa";
import { Slide,Zoom,Rotate } from "react-awesome-reveal";

const Dashboard = () => {
 
const [isAdmin] = useAdmin()
    
    const isInstructor = useInstructor()
    console.log(isAdmin,isInstructor)
 
 
    return (
      <div>
      <Navbar></Navbar>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  mt-6">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
    
         {
          isAdmin ? (
            <Rotate>
               <span>
               <li><Link to='/dashboard/manageUsers'><FaUser></FaUser> Manage Users</Link></li>
              <li><Link to='/dashboard/manageClasses'><FaListAlt></FaListAlt> Manage Classes</Link></li>
            </span>
            </Rotate>
          ) : isInstructor ? (
            <Slide>
              <span>
              <li><Link to='/dashboard/addClass'><FaBookOpen></FaBookOpen> Add Class</Link></li>
              <li><Link to='/dashboard/myClass'><FaBookReader></FaBookReader>  My Class</Link></li>
            </span>
            </Slide>
          ) : (
            <span>
            <Zoom>
               <li><Link to='/dashboard/mySelectedClass'><FaCheckCircle></FaCheckCircle> My Selected Classes</Link></li>
             <li><Link to='/dashboard/myEnrollClass'><FaChessQueen></FaChessQueen> My Enrolled Classes</Link></li>
             <li><Link to='/dashboard/paymentHistory'><FaHistory></FaHistory> Payment History</Link></li>
           
            </Zoom>
            </span>
          )
         }
          
            
       
         
             
          
     
   
           
                
        
    
</ul>
  
  </div>
</div>
     
     
     </div>
    );
};

export default Dashboard;
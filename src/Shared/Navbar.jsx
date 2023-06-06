import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar shadow-2xl px-6 sticky bg-base-100">
        <div className="navbar-start">
          <p className="font-serif">Fluentverse Academy</p>
        </div>
        <div className="navbar-center font-serif">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to='/Instructors' className="btn btn-ghost normal-case text-xl">Instructors</Link>
          <Link to='/classes' className="btn btn-ghost normal-case text-xl"> Classes</Link>
          <Link to='/dashboard' className="btn btn-ghost normal-case text-xl"> Dashboard</Link>
        </div>
        <div className="navbar-end">
          
          <button className="border-2 font-serif rounded-lg btn-primary btn-outline px-4">
            Login
          </button>
        </div>
      </div>
    );
};

export default Navbar;
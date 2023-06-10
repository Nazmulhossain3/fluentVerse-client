import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructor = () => {
    const {user} = useContext(AuthContext)
   const [isInstructor,setIsInstructor] = useState(false)
   
   useEffect(()=>{
    const fetchUser = async ()=> {
        const response = await fetch(`http://localhost:5000/users/Instructor/${user?.email}`);
        const result = await response.json();
        setIsInstructor(result.instructor)
    }

    fetchUser()

   },[user?.email])
    
   return isInstructor
};

export default useInstructor;
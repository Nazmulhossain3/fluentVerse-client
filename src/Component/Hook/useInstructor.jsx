import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructor = () => {
    const {user} = useContext(AuthContext)
   const [isInstructor,setIsInstructor] = useState(false)
   
   useEffect(()=>{
    const fetchUser = async ()=> {
        const response = await fetch(`/users/Instructor/${user?.email}`);
        const result = await response.json();
        setIsInstructor(result)
    }

    fetchUser()

   },[user?.email])
    
   return isInstructor
};

export default useInstructor;
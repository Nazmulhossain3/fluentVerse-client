import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
const {user} = useContext(AuthContext)
const [isAdmin,setIsAdmin] = useState(false)


useEffect(()=>{

const fetchUser = async ()=> {
    const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
    const result = await response.json();
    setIsAdmin(result.admin);
}

fetchUser()

},[user?.email])

return isAdmin

};

export default useAdmin;
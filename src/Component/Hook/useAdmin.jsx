import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
const {user} = useContext(AuthContext)
const [isAdmin,setIsAdmin] = useState(false)


useEffect(()=>{

const fetchUser = async ()=> {
    const response = await fetch(`/users/admin/${user?.email}`);
    const result = await response.json();
    setIsAdmin(result);
}

fetchUser()

},[user?.email])

return isAdmin

};

export default useAdmin;
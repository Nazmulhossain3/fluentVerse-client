import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
const {user} = useContext(AuthContext)
const [isAdmin,setIsAdmin] = useState(false)
const [adminLoading,setAdminLoading] = useState('')


useEffect(()=>{

const fetchUser = async ()=> {
    const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
    const result = await response.json();
    setIsAdmin(result.admin);
    setAdminLoading(false)
}

fetchUser()

},[user?.email])

return [isAdmin,adminLoading]

};

export default useAdmin;
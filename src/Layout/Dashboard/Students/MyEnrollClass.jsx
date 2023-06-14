import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Component/Provider/AuthProvider";


const MyEnrollClass = () => {
    const {user} = useContext(AuthContext)
    const {data : classes = []} = useQuery(['enrollClass'], async ()=> {
        const res = await fetch(`http://localhost:5000/enrolledClass/${user?.email}`)
        return res.json()
    })
    return (
        <div>
           
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Photo</th>
        <th>Name</th>
        <th>email</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
    {
        classes.map((item,index ) =>  <tr key={item._id}>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
           
          </div>
        </td>
        <td>
        {item.class_name }
          <br/>
         
         
        </td>
        <td>{item.email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">${item.price}</button>
        </th>
      </tr>
     
     
     
        )
    }





     
      
     
     
     
    </tbody>
  
  
   
   
    
  </table>
            </div>
        </div>
    );
};

export default MyEnrollClass;
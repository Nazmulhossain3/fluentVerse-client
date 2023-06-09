import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [adminDisable,setAdminDisable] = useState(false)
    const {data : users = [],refetch} = useQuery(['users'], async ()=> {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
       setAdminDisable(true)
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method : 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        // setAdminDisable(true)   
    }

    const handleDeleteUser = (id)=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`http://localhost:5000/users/${id}`,{
                  method : 'DELETE'
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  const remaining = users.filter(user => user._id !==id)
                  console.log(remaining)
                  if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                
}
                });
            }
          });
    }


//    make instructor code here 

const handleMakeInstructor = (user) => {

    fetch(`http://localhost:5000/users/Instructor/${user._id}`,{
        method : 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })

    
}
   
   
   
   
    return (
        <div>
            <h2>Here All User :{users.length}</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra p-6">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
        <button disabled={adminDisable}  onClick={()=>handleMakeAdmin(user)} className=" py-1 mb-3 rounded-md px-2 btn-outline bg-orange-500 text-white">Make Admin</button>
      
      
        <button  onClick={()=>handleMakeInstructor(user)} className=" py-1 rounded-md px-2 bg-green-500 text-white btn-outline ">Make Instructor</button>
        </td>

        <td>
            <FaTrashAlt onClick={()=> handleDeleteUser(user._id)} className="text-xl text-red-400"></FaTrashAlt>
        </td>

      </tr>
     

        )
     }
      
    </tbody>
  </table>
</div>


        </div>
    );
};

export default ManageUsers;
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const {data : selectedClasses = [],refetch} = useQuery(['selectedClasses'], async ()=> {
        const res = await fetch('http://localhost:5000/selectedClass')
        return res.json()
    })

    
    const handleSelectedClassDelete = (id)=> {
       

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
                refetch()
              fetch(`http://localhost:5000/selectedClass/${id}`,{
                  method : 'DELETE'
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire("Deleted!", "Your class has been deleted.", "success");
                
                  }
                });
            }
          });

        
    }

  
  
  
    return (
        <div>
            <h2>here is my selected class : {selectedClasses.length} </h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            selectedClasses.map((item,index)=> <tr key={item._id} className="bg-base-200">
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td><Link to={`/dashboard/payment/${item._id}`}><button className="border-2  px-6 bg-orange-400 rounded-2xl text-white">Pay</button></Link></td>
            <td><FaTrashAlt onClick={()=> handleSelectedClassDelete(item._id)} className="text-xl text-red-400"></FaTrashAlt>
 </td>
          </tr>)
        }
     
     

    </tbody>
  </table>
</div>



        </div>
    );
};

export default MySelectedClass;
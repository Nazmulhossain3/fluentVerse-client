import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Component/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const {user} = useContext(AuthContext)
  
 
 
  const navigate = useNavigate()


    const {data : classes = []} = useQuery(['classes'], async ()=> {
        const res = await fetch('http://localhost:5000/classes')
        return res.json()
    })

    const handleSelectedClass = (item)=> {
        console.log(item)
        fetch(`http://localhost:5000/selectedClass/${item._id}`,{
          method : 'POST',
          headers : {
            'content-type' : 'application/json',
          },
          body : JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(!user?.email){        
            Swal.fire(
              'Sorry!',
              'You have to login first to select the class',
              'error'
            )
            navigate('/login')
        
          } else if(data.insertedId){
            Swal.fire(
              'Good job!',
              'Class is selected SuccessFully!',
              'success'
            )
            navigate('/dashboard/mySelectedClass')
          }
        })

        
       
       
       
      

        

    }


    return (
        <div className="p-24">
           <h2 className=" text-4xl text-center text-primary font-semibold py-12">Learn language from our best classes with Instructors</h2>

           <div className="grid md:grid-cols-3 gap-8  justify-center ">
           {
                classes.map((item,index) =>  <div key={index}  className="card item-card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className="h-48 w-full" src={item.class_image} alt="Shoes" /></figure>
                <div className="mt-4 text-center font-serif">
                  <p className="">Topic : {item.name}</p>
                  <p className="">Instructor : {item.instructor_name}</p>
                  <p className=""> Available seats : {item.available_seats}</p>
                  <p className=""> Price : ${item.price}</p>
                  <p className=""> enrolled :{item.enrolled}</p>

                <button  onClick={()=> handleSelectedClass(item)} className=" btn-primary btn-outline rounded-2xl text-white border-2 w-full mt-3 mb-3 py-1 px-2">Select Class</button>
                  
                </div>
              </div>)
            }
           </div>
    
    
    
     </div>
    );
};

export default Classes;
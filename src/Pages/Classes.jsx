import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Classes = () => {
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
          if(data.insertedId){
            Swal.fire(
              'Good job!',
              'Class is selected SuccessFully!',
              'success'
            )
          }
        })
    }


    return (
        <div>
           <h2 className="mt-6 text-2xl text-center text-green-400 font-bold">Learn language from our best classes with Instructors</h2>

           <div className="grid md:grid-cols-3 gap-4 p-10 ">
           {
                classes.map((item,index) =>  <div key={index} className="card shadow-2xl card-compact w-72 bg-base-100 shadow-xl">
                <figure><img className="h-48 w-full" src={item.class_image} alt="Shoes" /></figure>
                <div className="mt-4 text-center font-serif">
                  <p className="">Topic : {item.name}</p>
                  <p className="">Instructor : {item.instructor_name}</p>
                  <p className=""> Available seats : {item.available_seats}</p>
                  <p className=""> Price : ${item.price}</p>
                  <p className=""> enrolled :{item.enrolled}</p>

                <button onClick={()=> handleSelectedClass(item)} className=" bg-green-500 btn-outline rounded-2xl text-white border-2 w-full mt-3 mb-3 py-1 px-2">Select Class</button>
                  
                </div>
              </div>)
            }
           </div>
    
    
    
     </div>
    );
};

export default Classes;
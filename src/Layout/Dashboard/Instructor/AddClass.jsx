import { useContext } from "react";
// import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Component/Provider/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useContext(AuthContext)
  
    const handleSubmit = event => {
      event.preventDefault()
      const form = event.target 
      const name = form.name.value 
      const class_image =form.class_image.value 
      const instructor_name = form.instructor_name.value 
      const email = form.email.value 
      const available_seats = parseFloat(form.available_seats.value) 
      const price = parseFloat(form.price.value)
      
      const classes = {
        name,
        class_image,
        instructor_name,
        email,
        available_seats,
        price
      }
      console.log(classes)
    
      fetch('http://localhost:5000/allClasses',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(classes)
      })
      .then(res=> res.json())
      .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Class is Added SuccessFully!',
                'success'
              )
              form.reset()
        }
      
    
    
    })
      
    
    
    };
  


    return (
        <div className="w-full">
            <form  onSubmit={handleSubmit} className="border-2 rounded-lg">
                <div className="p-6">
                <div className="flex mb-3 gap-4">
                <input type="text" name ='name'  placeholder="className" className="input input-bordered w-full input-sm max-w-xs" />
                <input type="text" name="class_image"  placeholder="class image" className="input input-bordered w-full input-sm max-w-xs" />
             </div>
                <div className="flex mb-3 gap-4">
                <input type="text" name="instructor_name" defaultValue={user?.displayName}  placeholder="Instructor name" className="input input-bordered w-full input-sm max-w-xs" />
                <input type="email" name="email" defaultValue={user?.email}   placeholder="Instructor email" className="input input-bordered w-full input-sm max-w-xs" />
             </div>
               
               
                <div className="flex mb-2 gap-4">
                <input type="number" name="available_seats"  placeholder="Available seats" className="input input-bordered w-full input-sm max-w-xs" />
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full input-sm max-w-xs" />
               </div>
                <input className="text-white border-2 w-full bg-green-500 rounded-lg" type="submit" value="AddClass" />
          
                </div>
            </form>
        </div>
    );
};

export default AddClass;
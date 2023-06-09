import { useForm } from "react-hook-form";

const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
  


    return (
        <div className="w-full">
            <form  onSubmit={handleSubmit(onSubmit)} className="border-2 rounded-lg">
                <div className="p-6">
                <div className="flex mb-3 gap-4">
                <input type="text" {...register("name")} placeholder="className" className="input input-bordered w-full input-sm max-w-xs" />
                <input type="text" {...register("Class_image")} placeholder="class image" className="input input-bordered w-full input-sm max-w-xs" />
             </div>
                <div className="flex mb-3 gap-4">
                <input type="text" {...register("Instructor_name")} placeholder="Instructor name" className="input input-bordered w-full input-sm max-w-xs" />
                <input type="email" {...register("email")}  placeholder="Instructor email" className="input input-bordered w-full input-sm max-w-xs" />
             </div>
               
               
                <div className="flex mb-2 gap-4">
                <input type="number" {...register("Available_seats")} placeholder="Available seats" className="input input-bordered w-full input-sm max-w-xs" />
                <input type="number" {...register("price")} placeholder="Price" className="input input-bordered w-full input-sm max-w-xs" />
               </div>
                <input className="text-white border-2 w-full bg-green-500 rounded-lg" type="submit" value="AddClass" />
          
                </div>
            </form>
        </div>
    );
};

export default AddClass;
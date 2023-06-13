import { useQuery } from "@tanstack/react-query";

const PopularInstructor = () => {
    const {data : instructors = []} = useQuery(['popularInstructor'], async ()=> {
        const res = await fetch('http://localhost:5000/popularInstructor')
        return res.json()
    })
 
    return (
        <div className="shadow-2xl">
            <h2 className="mt-8 text-2xl text-green-800 text-center font-serif font-bold py-2">Our popular Instructors  </h2>
        
        <div className="divider px-10"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 ">
        {
            instructors.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={item.photo} className="h-72" alt="" /></figure>
          
          </div> )
        }
        </div>
        
       
       
        </div>
    );
};

export default PopularInstructor;
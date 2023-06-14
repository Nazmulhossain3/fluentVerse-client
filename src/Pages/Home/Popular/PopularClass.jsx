import { useQuery } from "@tanstack/react-query";

const PopularClass = () => {
    const {data : classes = []} = useQuery(['popularClass'], async ()=> {
        const res = await fetch('http://localhost:5000/popularClass')
        return res.json()
    })
    return (
        <div className="shadow-2xl">
            <h2 className="text-2xl text-green-500 font-bold font-serif text-center my-4">Our Most Enrolled Classes : {classes.length} </h2> 
            <div className="divider px-10"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 ">
        {
            classes.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={item.class_image} className="h-72" alt="" /></figure>
            <div className="">
            <h2 className="text-center mb-4 mt-3"> Enrolled : {item.enrolled} </h2>
            </div>
          
          </div> )
        }
           </div>
        </div>
    );
};

export default PopularClass;
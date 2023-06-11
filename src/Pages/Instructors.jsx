/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
  
    const {data : Instructors = [] } = useQuery(['Instructors'], async ()=> {
        const res = await fetch('http://localhost:5000/allInstructor')
        return res.json()
    })
    return (
        <div className="font-sans">
            <h2 className="mt-4 font-semibold text-4xl text-center">Let's Introduce Our Instructors</h2>
           <div className="grid md:grid-cols-3 gap-4 p-10">
           {
                Instructors.map((instructor,index) =>  <div key={index} className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img className="h-72" src={instructor.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Name : {instructor.name}</h2>
                  <p> Email : {instructor.email}</p>
                  
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default Instructors;
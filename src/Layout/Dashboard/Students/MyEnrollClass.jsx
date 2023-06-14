import { useQuery } from "@tanstack/react-query";


const MyEnrollClass = () => {
    const {data : classes = []} = useQuery(['popularClass'], async ()=> {
        const res = await fetch('http://localhost:5000/enrolledClass')
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
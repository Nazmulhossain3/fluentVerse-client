import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Component/Provider/AuthProvider";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
  const { data: classes = [] } = useQuery(["enrollClass"], async () => {
    const res = await fetch(
      `http://localhost:5000/enrolledClass/${user?.email}`
    );
    return res.json();
  });

  return (
    <div>
      <h2>here is payment history</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>email</th>
              <th>transactionId</th>
              <th>price</th>
            
            
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                 {item.email}
                </td>
               
                <td>{item.transactionId}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    ${item.price}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

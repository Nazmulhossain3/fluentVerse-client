import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK)
const Payment = () => {

    const data = useLoaderData()
    
    const price = data.price
    console.log(price)


    return (
        <div className="mx-24 my-6">
            <h2 className="mb-6">Please Pay here</h2>
            <Elements stripe={stripePromise}>
                <CheckOut price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;
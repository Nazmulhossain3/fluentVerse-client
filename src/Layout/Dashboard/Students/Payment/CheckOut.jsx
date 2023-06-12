/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Component/Provider/AuthProvider";

const CheckOut = ({price}) => {
  const {user} = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [cardError,setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");

 useEffect(()=> {
  fetch('http://localhost:5000/create-payment-intent',{
    method : 'POST',
    headers : {
      'content-type' : 'json/application'
    },
    body : JSON.stringify(price)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data.clientSecret)
    setClientSecret(data.clientSecret)
  })


 },[price])
 
 
 
 
 
 
    const handleSubmit = async (event)=> {
        event.preventDefault()
        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return 
        }
        console.log('card', card)

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card,

        })

        if(error){
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('payment Method', paymentMethod)
        }


        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displayName || 'Unknown user',
                email: user?.email || 'Unknown user',
              },
            },
          },
        );
   
          if(confirmError){
            console.log(confirmError)
          }
          console.log(paymentIntent)
   
    } 


    return (
       <>
         <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-warning btn-sm btn-outline my-4" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
          {
            cardError && <p className="text-red-500">{cardError}</p>
          }
       </>
    );
};

export default CheckOut;
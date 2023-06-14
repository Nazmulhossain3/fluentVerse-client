/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Component/Provider/AuthProvider";
import './checkOut.css'
const CheckOut = ({data,price}) => {
  const {user} = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [cardError,setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing,setProceessing] = useState(false)
    const [transactionId,setTransactionId] = useState('')

 useEffect(()=> {
  fetch('http://localhost:5000/create-payment-intent',{
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify({price})
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

        setProceessing(true)


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
          console.log('payment intent',paymentIntent)
          setProceessing(false)

          if(paymentIntent.status === 'succeeded'){
            const paymentId = paymentIntent.id
            setTransactionId(paymentId)

            const payment = {
              email : user?.email,
              userName : user?.displayName,
              transactionId : paymentId,
              price,
              date : new Date(),
              enrolled : data._id,
              class_image : data.class_image,
              class_name : data.name
             

            }
           
              fetch('http://localhost:5000/payment',{
              method : 'POST',
              headers : {
                'content-type' : 'application/json'
              },
              body : JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data.insertedId){
                alert('payment inserted')
              }
            })
  
            }
   
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
        <button className="btn btn-warning btn-sm  my-2" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
          {
            cardError && <p className="text-red-500">{cardError}</p>
          }
          {
            transactionId && <p className="text-green-500"> transaction success with transactionId : {transactionId} </p>
          }
       </>
    );
};

export default CheckOut;
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/Provider/AuthProvider";
import app from "../../Component/firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';



const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
 const { signIn, user } = useContext(AuthContext)
const navigate = useNavigate()


    

const { register, handleSubmit, watch, formState: { errors } } = useForm();

const onSubmit = data => {
    console.log(data)
    signIn(data.email,data.password)
    .then((result) => {
      const user = result.user 
      console.log(user)
      navigate('/')
     })
    .catch((error) => {
      console.log(error)
    });

}

const handleGoogleLogin = ()=> {
    signInWithPopup(auth,provider)
        
    .then(result => {
      
      const signInUser = result.user;
      console.log(signInUser);
      const saveUser = {name : signInUser.displayName, email : signInUser.email}
      fetch('http://localhost:5000/users',{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(saveUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        navigate('/')
      })



  })
  .catch(error=> {
     console.log(error)
  })
  }


  

return (
        <div>
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <h2 className="text-2xl">Please Login</h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
        </div>
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} {...register("password")} placeholder="password" className="input input-bordered relative" />
     <button
      type="button"
      className="absolute inset-y-0 right-0 flex items-center pr-10 -top-8"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <RiEyeOffLine className="h-4 w-4" />
      ) : (
        <RiEyeLine className="h-4 w-4" />
      )}
    </button>
        
        
        
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">have you any account? register</Link>
          </label>
        </div>
     
        <div className="form-control mt-6">
          <input  className="btn btn-primary" type="submit" value="login" />
          
        </div>
        <button onClick={handleGoogleLogin} className=" text-white border-2 p-2 rounded-lg bg-slate-950 flex items-center mx-auto w-full gap-2">
              {" "}
              <FaGoogle></FaGoogle>
              <span>Login With Google</span>
        </button>
      </form>
    </div>
  </div>
     </div>
         
       

        
        
        </div>
    );
};

export default Login;
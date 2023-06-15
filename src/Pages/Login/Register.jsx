import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Component/firebase/firebase.config";

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const Register = () => {
    const navigate = useNavigate()
    const {createUser,userUpdate,logOut} = useContext(AuthContext)

    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        createUser(data.email,data.password)
        .then(result => {

        const loggedUser = result.user
        console.log(loggedUser)
      //  update use Profile
        userUpdate(data.name,data.photoURL)
        .then(()=>{
          const saveUser = {name : data.name, email : data.email, photo :data.photoURL}
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
          })


        })
        
        
      logOut()

          
        console.log(loggedUser)
        
        navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
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
        <div className="flex">
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card  w-full max-w-sm shadow-2xl bg-blue-400">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    
        <div className="form-control">
          
          <input   {...register("name")} type="name" placeholder="name" className="border-2 text-sm py-2 text-center rounded-lg border-green-300" required />
        </div>
        <div className="form-control">
         
          <input type="email"  {...register("email")} placeholder="email" className="border-2 text-sm py-2 text-center rounded-lg border-green-300" required/>
        </div>

        <div className="form-control">
  
   <input type="password"   {...register("password", { required: true, minLength: 6 })} placeholder="password" className="border-2 text-center text-sm py-2 rounded-lg border-green-300"  />
   {errors.password && (
      <span className="text-xs text-error mt-1">Password must be at least 6 characters</span>
    )}
        </div>
        <div className="form-control">
         
      <input type="password"  {...register("confirmPassword", {
      required: true,
      minLength: 6,
      validate: (value) => value === watch("password")})}
      placeholder="Confirm password" 
      className="border-2 text-center text-sm py-2 rounded-lg border-green-300"
      required />
      {errors.confirmPassword && (
      <span className="text-xs text-error mt-1">Passwords must match and be at least 6 characters</span>
  )}
     </div>
<div className="form-control">
          
          <input type="text"  {...register("photoURL")} placeholder="photo" className="border-2 rounded-lg border-green-300 text-center text-sm py-2" required />
          <label className="label">
         
            <p className="text-white text-xl"><small>Already have an account ? <Link className="label-text-alt link link-hover  text-white" to='/login'>Login</Link> </small></p>
          </label>
        </div>
       
       
       
        <div className="form-control">
         
          <input className="btn btn-primary" type="submit" value="Register" />
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

export default Register;
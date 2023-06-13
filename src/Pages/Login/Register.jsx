import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/Provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate()
    const {createUser,userUpdate,logOut} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        createUser(data.email,data.password)
        .then(result => {

        const loggedUser = result.user
        console.log(loggedUser)
      //  update use Profile
        userUpdate(data.name,data.photoURLP)
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
    return (
        <div>
 <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input   {...register("name")} type="name" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password")} placeholder="password" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password"  {...register("confirm password")} placeholder="Confirm password" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text"  {...register("photoURL")} placeholder="photo" className="input input-bordered" />
          <label className="label">
         
            <p><small>Already have an account ? <Link className="label-text-alt link link-hover" to='/login'>Login</Link> </small></p>
          </label>
        </div>
       
       
       
        <div className="form-control mt-6">
         
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;
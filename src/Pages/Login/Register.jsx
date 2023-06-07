import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
            {/* <a href="#" >Forgot password?</a> */}
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
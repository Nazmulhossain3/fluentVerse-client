import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => {
    console.log(data)
};


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
          <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">have you any account? register</Link>
          </label>
        </div>
     
        <div className="form-control mt-6">
          <input  className="btn btn-primary" type="submit" value="login" />
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
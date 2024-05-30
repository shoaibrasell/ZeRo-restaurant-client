import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email , data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
  };

  return (
   <>
   <Helmet>
   <title>ZeRo | Sign UP</title>
   </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/* <h1 className="text-3xl font-bold">Sign up now!</h1> */}
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
                // required
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                // required
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
                // required
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type==='minLength' && (
                <span className="text-red-600">Password must be 6 characters</span>
              )}
              {errors.password?.type==='maxLength' && (
                <span className="text-red-600">Password must be less then 20 characters</span>
              )}
              {errors.password?.type==='pattern' && (
                <span className="text-red-600">Password must one uppercase one lowercase and one special characters</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
              
            </div>
          </form>
              <p className="text-center text-2xl py-4  text-red-600"><small>Already have an account <Link to="/login">Login</Link></small></p>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
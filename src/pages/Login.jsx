import React from 'react';

const Login = () => {

    

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
          <form className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    );
};

export default Login;
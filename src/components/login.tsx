import React from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../context/userData.context";

const Login = () => {
   const { handleChange, handleSubmit } = useUserData();

   return (
      <div className="form">
         <h1 className="title-form">Login</h1>
         <form
            onSubmit={(event) => handleSubmit(event, "login")}
            className="form-input"
         >
            <label htmlFor="">
               E-mail
               <input
                  type="text"
                  placeholder="ejemplo@gmail.com"
                  name="email"
                  onChange={handleChange}
               />
            </label>
            <label htmlFor="">
               Password
               <input
                  type="password"
                  placeholder="**********"
                  name="password"
                  onChange={handleChange}
               />
            </label>
            <div className="btn">
               <button type="submit">Login</button>
               <Link to="/create">Create Account</Link>
            </div>
         </form>
      </div>
   );
};

export default Login;

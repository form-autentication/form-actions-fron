import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../context/userData.context";

const CreateAccount = () => {
   const { handleChange, handleSubmit } = useUserData();

   useEffect(() => {}, []);

   return (
      <div className="form">
         <h1 className="title-form">Create Account</h1>
         <form
            className="form-input"
            onSubmit={(event) => handleSubmit(event, "create")}
         >
            <label htmlFor="">
               Name
               <input
                  type="text"
                  placeholder="Leonel Messi"
                  name="name"
                  onChange={handleChange}
               />
            </label>
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
               <button type="submit">Create Account</button>
               <Link to="/login">Login</Link>
            </div>
         </form>
      </div>
   );
};

export default CreateAccount;

import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormFlag } from "../context/formFlag";
import userServices from "../services/user.services";

const CreateAccount = () => {
   const { flag, setFlag } = useFormFlag();

   const [createUser, setCreateUser] = useState({
      name: "",
      email: "",
      password: "",
   });

   const handleChange = (event: BaseSyntheticEvent) => {
      const value = event.target.value;

      setCreateUser({
         ...createUser,
         [event.target.name]: value,
      });
   };

   const handleSubmit = (event: BaseSyntheticEvent) => {
      event.preventDefault();

      userServices.userSerivcePost(createUser);
      console.log(createUser);
   };

   useEffect(() => {}, []);

   return (
      <div className="form">
         <h1 className="title-form">Create Account</h1>
         <form
            // action={`${urlBase}/create`}
            // method="POST"
            className="form-input"
            onSubmit={handleSubmit}
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
               <Link to="/login" onClick={() => setFlag(!flag)}>
                  Login
               </Link>
            </div>
         </form>
      </div>
   );
};

export default CreateAccount;

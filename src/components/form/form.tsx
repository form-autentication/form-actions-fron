import { useEffect, useState, BaseSyntheticEvent } from "react";
import { portBack } from "../../config/config";
import { valores } from "./formContent";

const Form = () => {
   const [show, setShow] = useState<boolean>(false);

   const showType = (): void => {
      setShow(!show);
   };

   const handleSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      return !show ? undefined : showType;
   };

   useEffect(() => {
      console.log(portBack);
   }, []);

   return (
      <div>
         <div className="form">
            {/* <h1 className="title-form">Login</h1> */}
            <h1 className="title-form">Login</h1>
            <form
               action={`${portBack}/quotes`}
               method="POST"
               className="form-input"
            >
               <label htmlFor="">
                  E-mail
                  <input
                     type="text"
                     placeholder="ejemplo@gmail.com"
                     name="email"
                  />
               </label>
               <label htmlFor="">
                  Password
                  <input
                     type="password"
                     placeholder="**********"
                     name="password"
                  />
               </label>
               <div className="btn">
                  <button
                     type={!show ? "submit" : "button"}
                     className={!show ? "" : "desactive"}
                     onClick={handleSubmit}
                  >
                     Login
                  </button>
                  <button
                     onClick={show ? undefined : showType}
                     type={show ? "submit" : "reset"}
                     className={show ? "" : "desactive"}
                  >
                     Create Account
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Form;

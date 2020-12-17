import { urlBase } from "../config/config";
import { useFormFlag } from "../context/formFlag";

const CreateAccount = () => {
   const { flag, setFlag } = useFormFlag();

   return (
      <div className="form">
         <h1 className="title-form">Create Account</h1>
         <form
            action={`${urlBase}/create`}
            method="POST"
            className="form-input"
         >
            <label htmlFor="">
               Name
               <input type="text" placeholder="Leonel Messi" name="userName" />
            </label>
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
               <button type="submit">Create Account</button>
               <a href="#" onClick={() => setFlag(!flag)}>
                  Login
               </a>
            </div>
         </form>
      </div>
   );
};

export default CreateAccount;

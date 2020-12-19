import { urlBase } from "../config/config";
import { useFormFlag } from "../context/formFlag";

const Login = () => {
   const { flag, setFlag } = useFormFlag();

   return (
      <div className="form">
         <h1 className="title-form">Login</h1>
         <form action={`${urlBase}/`} method="POST" className="form-input">
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
               <button type="submit">Login</button>
               <a href="#" onClick={() => setFlag(!flag)}>
                  Create Account
               </a>
            </div>
         </form>
      </div>
   );
};

export default Login;

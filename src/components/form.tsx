import { useEffect } from "react";
import { useFormFlag } from "../context/formFlag";
import CreateAccount from "./createAccount";
import Login from "./login";
import Service from "../services/user.services";

const Form = () => {
   const { flag } = useFormFlag();

   useEffect(() => {
      Service.userSerivceGet();
   }, []);

   return <div>{flag ? <Login /> : <CreateAccount />}</div>;
};

export default Form;

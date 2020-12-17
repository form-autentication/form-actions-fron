import axios from "axios";
import { useFormFlag } from "../context/formFlag";
import CreateAccount from "./createAccount";
import Login from "./login";

const Form = () => {
   const { flag } = useFormFlag();

   return <div>{flag ? <Login /> : <CreateAccount />}</div>;
};

export default Form;

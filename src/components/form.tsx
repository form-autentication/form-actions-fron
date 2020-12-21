import { useEffect } from "react";
import CreateAccount from "./createAccount";
import Login from "./login";
import { RouteComponentProps, useParams } from "react-router-dom";

interface IForm {
   slug: string;
}

const Form = () => {
   let { slug } = useParams<IForm>();

   const revertForm = ({ slug }: IForm) => {
      switch (slug) {
         case "login":
            return <Login />;
         case "create":
            return <CreateAccount />;
         default:
            return <div>No existe ninguna Pagina</div>;
      }
   };

   return (
      <div className="home">
         <div className="container">
            <div>{revertForm({ slug })}</div>
         </div>
      </div>
   );
};

export default Form;

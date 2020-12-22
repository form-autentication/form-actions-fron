import { useEffect } from "react";

const PageError = () => {
   useEffect(() => {
      console.log("Si entro al error");
   }, []);

   return (
      <div className="page-error">
         <div>Es una pagina de Error relacionado con esta ruta: Page Error</div>
      </div>
   );
};

export default PageError;

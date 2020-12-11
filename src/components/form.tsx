const Form = () => {
   return (
      <div className="form">
         <h1 className="title-form">Formulario</h1>
         <form action="GET" className="form-input">
            <label htmlFor="">
               E-mail
               <input type="text" placeholder="ejemplo@gmail.com" />
            </label>
            <label htmlFor="">
               Password
               <input type="password" name="" placeholder="**********" />
            </label>
            <button>Login</button>
         </form>
      </div>
   );
};

export default Form;

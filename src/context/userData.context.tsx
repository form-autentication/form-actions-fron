import { BaseSyntheticEvent, createContext, useContext, useState } from "react";
// import { Redirect } from "react-router-dom";
import { userSerivcePost } from "../services/user.services";

interface CreateUserI {
   name?: string;
   email: string;
   password: string;
}

const UserDataContext = createContext({} as any);

export const UserDataProvider = ({ children }: any) => {
   const [createUser, setCreateUser] = useState<CreateUserI>({
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

   const handleSubmit = async (event: BaseSyntheticEvent, endpoint: string) => {
      event.preventDefault();

      let { mssg, flag } = await userSerivcePost(createUser, endpoint);

      console.log(createUser);

      if (endpoint === "login") {
         flag
            ? console.log("Si se puede logear")
            : console.log("No se puede logear");
      }
   };

   return (
      <UserDataContext.Provider
         value={{ createUser, setCreateUser, handleChange, handleSubmit }}
      >
         {children}
      </UserDataContext.Provider>
   );
};

export const useUserData = () => {
   const { createUser, setCreateUser, handleChange, handleSubmit } = useContext(
      UserDataContext
   );
   return { createUser, setCreateUser, handleChange, handleSubmit };
};

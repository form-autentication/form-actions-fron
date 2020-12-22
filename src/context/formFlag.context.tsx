import { createContext, useContext, useState } from "react";

const FormFlagContext = createContext({} as any);

export const FormFlagProvider = ({ children }: any) => {
   const [flag, setFlag] = useState(true);

   return (
      <FormFlagContext.Provider value={{ flag, setFlag }}>
         {children}
      </FormFlagContext.Provider>
   );
};

export const useFormFlag = () => {
   const { flag, setFlag } = useContext(FormFlagContext);
   return { flag, setFlag };
};

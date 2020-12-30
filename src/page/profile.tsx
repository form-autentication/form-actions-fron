import { urlBase } from "@/config/config";
// import { userSerivceGet } from "@/services/user.services";
import axios from "axios";
import { useEffect, useState } from "react";

interface DataUserI {
   id: string;
   name: string;
   email: string;
   password: string;
}

const Profile = () => {
   const [dataUsers, setDataUsers] = useState<Array<DataUserI>>([]);

   useEffect(() => {
      const getDataUser = async () => {
         let { data } = await axios(`${urlBase}/profile`);

         console.log(
            "🚀 ~ file: profile.tsx ~ line 12 ~ getDataUser ~ result",
            data
         );
         setDataUsers(data);
      };

      getDataUser();
      console.log(dataUsers);
   }, []);

   return (
      <div>
         <h1>Profile</h1>
         {dataUsers.map((res, i) => (
            <div key={i}>
               <h3>{res.name}</h3>
               <p>{res.email}</p>
               <p>{res.password}</p>
               <br />
            </div>
         ))}
      </div>
   );
};

export default Profile;

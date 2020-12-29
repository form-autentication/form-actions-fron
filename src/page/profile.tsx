import { useEffect, useState } from "react";
import { userSerivceGet } from "../services/user.services";

const Profile = () => {
   const [dataUsers, setDataUsers] = useState([]);

   useEffect(() => {
      const getDataUser = () => {
         userSerivceGet().then(async (res) => {
            await setDataUsers(res.data);
            await console.log(dataUsers);
         });
      };

      getDataUser();
   }, []);

   return (
      <div>
         <div>Profile</div>
      </div>
   );
};

export default Profile;

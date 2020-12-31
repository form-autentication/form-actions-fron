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
      <div className="profile">
         <div className="container">
            <h1>Profile</h1>
            {/* {dataUsers.map((res, i) => (
            <div key={i}>
               <h3>{res.name}</h3>
               <p>{res.email}</p>
               <p>{res.password}</p>
               <br />
            </div>
         ))} */}

            <table className="table">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Nombres</th>
                     <th>Email</th>
                     <th>Password</th>
                     {/* <th></th> */}
                  </tr>
               </thead>
               <tbody>
                  {dataUsers.map((res, i) => (
                     <tr ng-repeat="item in lista" key={i}>
                        <td>{i + 1}</td>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.password}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Profile;

import { Redirect } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../config/config";

class UserService {
   public userSerivceGet = () => {
      axios
         .get(`${urlBase}/`)
         .then((res) => console.log(res.data))
         .catch((error) => console.log(error));
   };

   public userSerivcePost = (data: {}, endpoint: string) => {
      axios
         .post(`${urlBase}/${endpoint}`, data)
         .then((res) => {
            console.log(res.data);
         })
         .catch((error) => console.log(error));
   };
}

export default new UserService();

import axios from "axios";
import { clearScreenDown } from "readline";
import { urlBase } from "../config/config";

class UserService {
   constructor() {}

   public userSerivceGet = () => {
      axios
         .get(`${urlBase}/`)
         .then((res) => console.log(res.data))
         .catch((error) => console.log(error));
   };

   public userSerivcePost = (data: {}) => {
      axios
         .post(`${urlBase}/create`, data)
         .then((res) => console.log(res.data))
         .catch((error) => console.log(error));
   };
}

export default new UserService();

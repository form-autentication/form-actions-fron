import axios from "axios";
import { urlBase } from "../config/config";

export const userSerivceGet = () => {
   axios
      .get(`${urlBase}/`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
};

export const userSerivcePost = (data: {}, endpoint: string) => {
   let resdata = axios
      .post(`${urlBase}/${endpoint}`, data)
      .then((res) => {
         return res.data;
      })
      .catch((error) => console.log(error));

   return resdata;
};

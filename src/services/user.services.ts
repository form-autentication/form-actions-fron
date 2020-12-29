import axios from "axios";
import { urlBase } from "../config/config";

export const userSerivceGet = () => {
   let data = axios
      .get(`${urlBase}/profile`)
      .then((res) => res.data)
      .catch((error) => console.log(error));

   return data;
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

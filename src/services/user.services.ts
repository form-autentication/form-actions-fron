import axios from "axios";
import { useState } from "react";
import { urlBase } from "../config/config";

interface ServerData {
   mssg: string;
   flag: boolean;
}

export const userSerivceGet = () => {
   axios
      .get(`${urlBase}/`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
};

export const userSerivcePost = (data: {}, endpoint: string) => {
   const [resData, setResData] = useState([]);

   axios
      .post(`${urlBase}/${endpoint}`, data)
      .then((res) => {
         let { mssg, flag }: ServerData = res.data;

         console.log(`El mensage es ${mssg}, y el valor es ${flag}`);
      })
      .catch((error) => console.log(error));
};

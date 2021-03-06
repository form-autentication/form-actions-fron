import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-container";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FormFlagProvider } from "./context/formFlag.context";
import { UserDataProvider } from "./context/userData.context";

ReactDOM.render(
   <React.StrictMode>
      <UserDataProvider>
         <FormFlagProvider>
            <App />
         </FormFlagProvider>
      </UserDataProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

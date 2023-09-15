
import React  from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route } from "react-router-dom";
//import i18n from "i18next";
import App from "./App";

ReactDOM.render( 



  <BrowserRouter basename={"/tana"} >
   <App />
   
</BrowserRouter>,
  document.getElementById("root")
);
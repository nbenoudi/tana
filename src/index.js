
import React /*{Suspense}*/ from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route } from "react-router-dom";
//import {useSSR} from "react-i18next";
//import i18n from "i18next";
import App from "./App";
/*
const AppContainer=()=>{
  useSSR(window.initialI18Strore,window.initialLanguage);
  return(<Suspense fallback={<span> Gann hat da Tcharga ....</span>}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Suspense>);

};
ReactDOM.hydrate(<AppContainer></AppContainer>,
  document.getElementById("root")
);

*/

ReactDOM.render(
<BrowserRouter>
   <App />
</BrowserRouter>,
  document.getElementById("root")
);

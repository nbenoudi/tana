import { resolve } from "mathjs";

 const  Weatherfuture=async() => {
    
   return new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest(); 
     xhr.responseType= "json" ;
     xhr.open('GET', "https://api.openweathermap.org/data/2.5/forecast/?cnt=4&lat=32.0896736&lon=-5.1052952&appid=bc12083e70d2d22298c2df1cec7101d9", true); 
               xhr.onloadend =  () =>{
               resolve(xhr.response.list);
               }
  xhr.onerror =  ()=> {
      reject({
          status:"OHO",
          statusText: xhr.statusText
      });
  };
  xhr.send();
   });
   
    }
   export default  Weatherfuture;
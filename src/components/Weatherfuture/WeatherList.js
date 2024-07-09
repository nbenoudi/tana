import React from "react";
import Weatherfuture from "./weatherfuture";
import moment from "moment";
import "./WeatherList.css";
class WeatherList extends React.Component{
   state = {list:[]};
async componentDidMount(){
    const s = await Weatherfuture();
this.setState({list:s})
}


render() {

    return(
    <div className="weather-list"> 
        
         <table className="ui inverted table"><tr><td>Tassa3t</td><td>Tafouyt</td><td>Azyou</td></tr> <tbody>
         {
            
        this.state.list.map((item,index)=>
        
                      
                 <tr key={index}>
                     <td>{  ("0" + new Date(item.dt_txt).getHours()).slice(-2)+":00"} </td>
                    <td>{(parseInt(item.main.temp)-273.15).toFixed()} C°</td>
                    <td>{item.wind.speed} km/h</td>
                </tr> 
            
        
    
    )}
    </tbody>  

    </table>
     </div>
)

}
}
export default WeatherList
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
    <> 
        
         <table className="ui striped green  table"><thead> <tr> <th>Tassa3t</th><th>Tafouyt</th><th>Azwou</th></tr></thead>  
         
         <tbody>
                 {
                 this.state.list.map((item,index)=>
        
                      
                 <tr key={index}>
                     <td>{  ("0" + new Date(item.dt_txt).getHours()).slice(-2)+":00"} </td>
                    <td>{(parseInt(item.main.temp)-273.15).toFixed()} C°</td>
                    <td>{item.wind.speed} km/h</td>
                </tr>)
                }
    </tbody>  

    </table>
     </>
)

}
}
export default WeatherList
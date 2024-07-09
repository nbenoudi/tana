import React, { Component } from "react";
import WeatherList from "./Weatherfuture/WeatherList"
import  moment from "moment";
import { log } from "mathjs";
export default class Weather extends Component {

  // State
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      isLoading: true,
      content: [],
      error: ""
    };
  }
  
  async  componentDidMount() {
    this._isMounted = true;
    //  gethaln simana();
    const response = await this.getweather();
   
  // Get Cours from Backend
  }


    // Get Cours from Backend
   
    async getweather() {
     const xhr = new XMLHttpRequest(); 
    
     await xhr.open('GET', "https://api.openweathermap.org/data/2.5/weather?lat=32.0896736&lon=-5.1052952&appid=bc12083e70d2d22298c2df1cec7101d9", true); 
      xhr.responseType= "json" ;

      xhr.onload = r => {
        var  jsonResponse =  xhr.response; 
        if (this._isMounted) {
         
              this.setState({
          content:  jsonResponse,
          isLoading: false 
        });
       }
      }
      xhr.send(null);
        
    };

 
    componentWillUnmount() {
      this._isMounted = false;
    }
  

 
  
  render() {
    
      return (
          <div className="ui inverted table">
          <h3> ⵍⵃⴰⵍⵜ ⵏ ⵍⵊⴰⵡ ⴰⵙⵙⴰ <b style={{color:"red"}}>{ moment(Date(Number.parseInt((this.state.content.dt)))).format("DD/MM/YYYY")}</b>   حالة الطقس بقصر تانة أسول تنغير ليومه</h3>
          
       {
       
        Object.keys(this.state.content).map((lat,indexkey) => { 
                                        let   itijah="";
                                        const deg=parseInt(this.state.content.wind.deg);
                                    
                                            if (deg <= 90) {
                                              itijah="اتجاه الرياح ،اتجاه الريش"
                                            } else {
                                              if (deg <= 180) {
                                                itijah="اتجاه الرياح، اتجاه كلميمة"
                                              } else {
                                                if (deg <= 270) {
                                                  itijah="اتجاه الرياح ،اتجاه اسول"
                                                } else {
                                                  itijah="اتجاه الرياح ،اتجاه امين لشيل"
                                                }
                                              }
                                            }
              

                                          switch (lat) {
                                              case "main":
                                              return <div  key={indexkey}> 
                                              <h3> ⴰⵛⴰⵔⵔⵉⴺ ⵏ ⵍⴰⵀⵎⴰ ⵏ ⵡⴰⵙⵙⴰ ⵙ C° {parseInt(this.state.content.main.temp-273.15) }  :درجة حرارة اليوم  </h3>
                                              <h3> ⴰⵔⵉⵙ ⵜⵃⴰⵙⵙⴰⴷ ⵙ C°{parseInt(this.state.content.main.feels_like-273.15)} : و تحس انها </h3>
                                            <h3> ⵍⵃⴰⴷ ⵏⵙ ⴰⵎⴰⵊⵢⴰⴽ ⵙ C°{parseInt(this.state.content.main.temp_max-273.15)}:درجة الحرارة العليا  </h3>
                                            <h3>ⵍⵃⴰⴷ ⵏⵙ ⴰⵎⴰⵣⴷⴰⵔ ⵙ C°{parseInt(this.state.content.main.temp_min-273.15)}:درجة الحرارة السفلى  </h3>
                                            
                                            <h3> ⵜⵉⵣⵎⵉ ⵏ ⵓⵣⵡⵓ ⵙ hPa {parseInt(this.state.content.main.pressure)}الضغط الجوي: ب هكتوبسكال</h3>
                                            <h3>ⵓⵎⵓⵖ ⵏ ⵡⵓⵣⵡⵓ ⵙ % {this.state.content.main.humidity}:نسبة الرطوبة</h3>
                                              
                                              </div>
                                              case "wind":return <div key={indexkey}><h3> ⵜⴰⵔⵓⵍⴰ ⵏ ⴰⵣⵡⵓ ⵙ km/h {parseFloat(this.state.content.wind.speed*3,6)}  :  سرعة الرياح  </h3>
                                              <h3 > ⴹⴰⵔⴰⴵⴰ : {this.state.content.wind.deg}  {itijah} : بدرجة   </h3></div>
                                              case "sys":
                                                return <div key={indexkey}><h3>  ⴰ ⵏⴿⴰⵔ ⵏ ⵜⴰⴼⵓⵢⵜ {  moment(Number.parseInt(this.state.content.sys.sunrise+"000")).utcOffset('+01:00')
                                                .format('hh:mm ')}  :شروق الشمس  </h3>
                                            

                                              <h3>ⵖⵍⴰⵢ ⵏ ⵜⴰⴼⵓⵢⵜ  { new Intl.DateTimeFormat('ma-MA', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(this.state.content.sys.sunset+"000")
                                               }     . غروبها</h3> 
                                              


                                                        
                                              </div>
                                              case "clouds":  return <div key={indexkey}><h3> ⵛⵃⴰⵍ ⵏ ⵉⵙⵉⴴⵏⴰⵡ ⴳ ⵉⵊⵏⵏⴰ % {parseInt(this.state.content.clouds.all)}  :نسبة السحوب في السماء   </h3>
                                             </div>
                                              case "rain":  return <div key={indexkey}><h3>ⴰⵏⵣⴰⵔ  {this.state.content.rain.toString("3h")}  الأمطار المسجلة خلال 3 ساعة من الزمن   </h3>
                                              </div>
                                              case "snow":  return <div key={indexkey}><h3> ⴰⵜⴼⴻⵍ {this.state.content.snow.toString(3+"h")}  الثلوج المسجلة خلال3 ساعة من الزمن   </h3>
                                              </div>
                                               
                                              case "weather":return <div key={indexkey}>  <img src={"http://openweathermap.org/img/wn/"+this.state.content.weather[0].icon+"@2x.png" } /> <h3>{this.state.content.weather[0].description}</h3> 
                                              </div>

                                              default:

                                                break;
                                            }
          
                                        })

       }
          
       
        
       <div style={{color:"red"}} ><h3>{this.state.error} </h3></div> 
     
       <WeatherList></WeatherList>
      
      </div>
    );
  }

 
}

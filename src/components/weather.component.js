import React, { Component } from "react";
import WeatherList from "./Weatherfuture/WeatherList"
import  moment from "moment";
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
          <div className="ui red table">
          <h3 className="center aligned"> ⵍⵃⴰⵍⵜ ⵏ ⵍⵊⴰⵡ ⴰⵙⵙⴰ <b style={{color:"red"}}>{ moment(Date(Number.parseInt((this.state.content.dt)))).format("DD/MM/YYYY")}</b>   حالة الطقس بقصر تانة أسول تنغير ليومه</h3>
          
       {
       
        Object.keys(this.state.content).map((lat,indexkey) => { 
                                        let   itijah="";
                                        const deg=parseInt(this.state.content.wind.deg);
                                    
                                            if (deg <= 90) {
                                              itijah="الريش"
                                            } else {
                                              if (deg <= 180) {
                                                itijah="كلميمة"
                                              } else {
                                                if (deg <= 270) {
                                                  itijah="اسول"
                                                } else {
                                                  itijah="امين لشيل"
                                                }
                                              }
                                            }
              

                                          switch (lat) {
                                              case "main":
                                              return <div  key={indexkey} className="right aligned"> 
                                              <h3 className="right aligned" > ⴰⵛⴰⵔⵔⵉⴺ ⵏ ⵍⴰⵀⵎⴰ ⵏ ⵡⴰⵙⵙⴰ ⵙ < b style={{color:"blue"}}> C° { parseInt(this.state.content.main.temp-273.15) }</b>   :درجة حرارة اليوم  </h3>
                                              <h3> ⵍⵃⴰⴷ ⵏⵙ ⴰⵎⴰⵊⵢⴰⴽ ⵙ <b style={{color:"red"}} >C°{parseInt(this.state.content.main.temp_max-273.15)}</b> :درجة الحرارة العليا  </h3>
                                              <h3>ⵍⵃⴰⴷ ⵏⵙ ⴰⵎⴰⵣⴷⴰⵔ ⵙ <b style={{color:"green"}} >C°{parseInt(this.state.content.main.temp_min-273.15)}</b>:درجة الحرارة السفلى  </h3>
                                            
                                            <h3> ⵜⵉⵣⵎⵉ ⵏ ⵓⵣⵡⵓ ⵙ <b style={{color:"#4B8CC8"}} >hPa {parseInt(this.state.content.main.pressure)}</b> : الضغط الجوي: ب هكتوبسكال</h3>
                                            <h3>ⵓⵎⵓⵖ ⵏ ⵡⵓⵣⵡⵓ ⵙ  <b style={{color:"#1D3486"}}> {this.state.content.main.humidity} % </b>:نسبة الرطوبة</h3>
                                            <h3>ⴰⵙⵉⵇⵯⵔ ⵙ ⵍ ⵎⵉⵜⵔ <b style={{color:"#1D1A39"}}>{this.state.content.visibility} metre </b> :مسافة الرؤية بالمتر</h3>
                                              </div>
                                              case "wind":return <div key={indexkey} className="right aligned"><h3> ⵜⴰⵔⵓⵍⴰ ⵏ ⴰⵣⵡⵓ ⵙ <b style={{color:"#203354"}}> {parseFloat(this.state.content.wind.speed*3,6).toFixed(2)} km/h </b>  :  سرعة الرياح  </h3>
                                             <h3>  ⵍⵉⵜⵉⵊⴰⵀ ⵏ ⵓⵥⵡⵓ - <b style={{color:"#1D1A39", textAlign:"center"}}>{itijah}  </b></h3>
                                              <h3 > ⴹⴰⵔⴰⴵⴰ : <b style={{color:"#1D1A39"}}>{this.state.content.wind.deg} degree </b>  بدرجة   </h3> :</div>
                                              case "sys":
                                                return <div key={indexkey} className="right aligned"><h3>  ⴰ ⵏⴿⴰⵔ ⵏ ⵜⴰⴼⵓⵢⵜ <b style={{color:"#FF9800"}}>{  moment(Number.parseInt(this.state.content.sys.sunrise+"000")).utcOffset('+01:00')
                                                .format('hh:mm ')} </b>  :شروق الشمس  </h3>
                                            

                                              <h3>ⵖⵍⴰⵢ ⵏ ⵜⴰⴼⵓⵢⵜ <b style={{color:"#1D1A20"}}>{ new Intl.DateTimeFormat('ma-MA', { hour: '2-digit', minute: '2-digit'}).format(this.state.content.sys.sunset+"000")}</b> 
                                                  غروب الشمس</h3> 
                                              


                                                        
                                              </div>
                                              case "clouds":  return <div key={indexkey} className="right aligned"><h3> ⵛⵃⴰⵍ ⵏ ⵉⵙⵉⴴⵏⴰⵡ ⴳ ⵉⵊⵏⵏⴰ <b style={{color:"#3F51B5"}}> % {parseInt(this.state.content.clouds.all)}</b>  :نسبة السحوب في السماء   </h3>
                                             </div>
                                              case "rain":  return <div key={indexkey} className="right aligned"><h3>ⴰⵏⵣⴰⵔ   mm {this.state.content.rain.toString("3h")}  الأمطار المسجلة خلال 3 ساعة من الزمن   </h3>
                                              </div>
                                              case "snow":  return <div key={indexkey} className="right aligned"><h3> ⴰⵜⴼⴻⵍ mm{this.state.content.snow.toString(3+"h")}  الثلوج المسجلة خلال3 ساعة من الزمن   </h3>
                                              </div>
                                               
                                              case "weather":return <div key={indexkey} className="right aligned">  <img src={"http://openweathermap.org/img/wn/"+this.state.content.weather[0].icon+"@2x.png" } /> <h3>{this.state.content.weather[0].description}</h3> 
                                              </div>

                                              default:

                                                break;
                                            }
          
                                        })

       }
          
       
        
       <div style={{color:"red"}} ><h3>{this.state.error} </h3></div> 
     
       <WeatherList ></WeatherList>
      
      </div>
    );
  }

 
}

import React, { Component } from "react";
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
    //  getcours();
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
          <div>
          <h3> {  Date(Number.parseInt((this.state.content.dt)))}  حالة الطقس بتانة يوم</h3>
          
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
                                              return <div  key={indexkey}  ><h3> C° {parseInt(this.state.content.main.temp-273.15)} :درجة الحرارة  </h3>
                                              <h3> C°{parseInt(this.state.content.main.feels_like-273.15)} : تحس ان درجة الحرارةهي </h3>
                                            <h3> C°{parseInt(this.state.content.main.temp_min-273.15)}:درجة الحرارة السفلى  </h3>
                                            <h3> C°{parseInt(this.state.content.main.temp_max-273.15)}:درجة الحرارة العليا  </h3>
                                            <h3> hPa {parseInt(this.state.content.main.pressure)}الضغط الجوي: ب هكتوبسكال</h3>
                                            <h3> % {this.state.content.main.humidity}:نسبة الرطوبة</h3>
                                              
                                              </div>
                                              case "wind":return <div key={indexkey}><h3> km/h {parseFloat(this.state.content.wind.speed*3,6)}  : ⵜⴰⵔⵓⵍⴰ ⵏ ⴰⵣⵡⵓ سرعة الرياح  </h3>
                                              <h3 > ⴹⴰⵔⴰⴵⴰ : {this.state.content.wind.deg}  {itijah} : بدرجة   </h3></div>
                                              case "sys":
                                                return <div key={indexkey}><h3> {  moment(Number.parseInt(this.state.content.sys.sunrise+"000")).utcOffset('+01:00')
                                                .format('hh:mm ')}  ⴰ ⵏⴿⴰⵔ ⵏ ⵜⴰⴼⵓⵢⵜ  :شروق الشمس  </h3>
                                            

                                              <h3> { new Intl.DateTimeFormat('ma-MA', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(this.state.content.sys.sunset+"000")
                                               }     .غروبهاⴰⵖⵍⴰⵢ ⵏ ⵜⴰⴼⵓⵢⵜ  </h3> 
                                              


                                                        
                                              </div>
                                              case "clouds":  return <div key={indexkey}><h3> % {parseInt(this.state.content.clouds.all)}  :نسبة السحوب في السماء   </h3>
                                             </div>
                                              case "rain":  return <div key={indexkey}><h3> % {this.state.content.rain.toString(3+"h")}  الأمطار المسجلة خلال 3 ساعة من الزمن   </h3>
                                              </div>
                                              case "snow":  return <div key={indexkey}><h3> % {this.state.content.snow.toString(3+"h")}  الثلوج المسجلة خلال3 ساعة من الزمن   </h3>
                                              </div>
                                               
                                              case "weather":return <div key={indexkey}>  <img src={"http://openweathermap.org/img/wn/"+this.state.content.weather[0].icon+"@2x.png" } /> <h3>{this.state.content.weather[0].description}</h3> 
                                              </div>

                                              default:

                                                break;
                                            }
          
                                        })

       }
          
       
             
       <div style={{color:"red"}} ><h3>{this.state.error} </h3></div> 
     
      
      
      </div>
    );
  }

 
}

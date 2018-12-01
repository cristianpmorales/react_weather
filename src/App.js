import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


//instance of App that extends React.Component

const API_KEY = 'a78661421a48670f2508e2fb844a1fa6'

class App extends React.Component{
  state = {
    temperature : undefined,
    city : undefined,
    country: undefined,
    humdity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    //creating variable to enter more information in the url
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    //creates the call
     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${city},${country}&appid=${API_KEY}`)
    //Converts what has been called to json
     const data = await api_call.json()
     //Case for when user clicks search
     if (city && country ){
       console.log(data)
       this.setState({
         temperature : data.main.temp,
         city: data.name,
         country: data.sys.country,
         humidity: data.main.humidity,
         description: data.weather[0].description,
         error: ""
       })
     } else {
       console.log(data)
       this.setState({
         temperature : undefined,
         city: undefined,
         country: undefined,
         humidity: undefined,
         description: undefined,
         error: "Please enter the values"
       })
     }
  }

  //render method to render jsx
  render(){
    return(
      //Only one parent
      <div>
        <div className="wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                 <div className = "col-xs-7 form-container">
                   <Form getWeather = {this.getWeather} />
                   <Weather
                     temperature = {this.state.temperature}
                     city = {this.state.city}
                     country = {this.state.country}
                     humidity = {this.state.humidity}
                     description = {this.state.description}
                     error = {this.state.error}
                   />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// <Titles />
// <Form getWeather = {this.getWeather} />
// <Weather
//   temperature = {this.state.temperature}
//   city = {this.state.city}
//   country = {this.state.country}
//   humidity = {this.state.humidity}
//   description = {this.state.description}
//   error = {this.state.error}
// />



export default App;

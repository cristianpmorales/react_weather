import React from "react"

// class Weather extends React.Component{
//   render(){
//     return(
//       <div>
//           {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//           {this.props.city && this.props.country && <p> Location : {this.props.city},{this.props.country}</p>}
//           {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
//           {this.props.description && <p> Description : {this.props.description}</p>}
//           {this.props.error && <p> Error: Please enter a city and a Country</p>}
//       </div>
//     )
//   }
// }

const Weather = props => (
  <div className = "weather_info">
    {
      props.city && props.country && <p className = "weather_key">Location:
      <span className= "weather_value">{props.city},{props.country}</span>
      </p>
    }
    {
      props.temperature && <p className = "weather_key">Temperature:
      <span className = "weather_value">{props.temperature}</span>
      </p>
    }
    {
      props.humidity && <p className= "weather_key"> Humidity:
      <span className = "weather_value">{props.humidity}</span>
      </p>
    }
    {
      props.description && <p className = "weather_key"> Description:
      <span className = "weather_value">{props.description}</span>
      </p>
    }
    {props.error && <p className = "weather_info"> Error: Please enter a city and a country </p>}
  </div>
)

export default Weather

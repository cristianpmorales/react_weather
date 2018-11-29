import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
//instance of App that extends React.Component
class App extends React.Component{

  //render method to render jsx
  render(){
    return(
      //Only one parent
      <div>
        <Titles />
        <Form />
        <Weather/>
      </div>
    )
  }
}

export default App;

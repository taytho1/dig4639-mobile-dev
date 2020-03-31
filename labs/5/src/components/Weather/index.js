import React from 'react';
import Card from "../Card/index.js";


class Weather extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state = { periods: [] };
  }

  componentDidMount(){

    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {let periods = result.properties.periods;
    
    this.setState({ 
      periods: periods
    });
    });
    
  }

  render() 
  {
    return(
      <div>
          {
            this.state.periods.map((periods, index) => 
            {
              return <Card key={index}
                name={periods.name} 
                temperature={periods.temperature} 
                temperatureUnit={periods.temperatureUnit} 
                detailedForecast={periods.detailedForecast}/>
            })
          }
      </div>
    );
  }
}
export default Weather;


import React from "react";
import "./index.css";

class Card extends React.Component
{
    render()
        {
        return (
            <div className="card">
            <h3>{this.props.name}</h3>
            <h2>{this.props.temperature}{this.props.temperatureUnit}</h2>
            <p>{this.props.detailedForecast}</p>
        </div>
        );
    }
}
export default Card;
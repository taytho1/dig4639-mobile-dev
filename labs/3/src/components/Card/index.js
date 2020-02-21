import React from "react";
import "./index.css";

class Card extends React.Component
{
  render()
  {
    const element = this.props.content;
    return (
    <div className="card">{element}</div>
    );
  }
}
export default Card;
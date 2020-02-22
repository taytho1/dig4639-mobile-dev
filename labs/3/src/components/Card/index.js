import React from "react";
import "./index.css";

class Card extends React.Component
{
  constructor(props){
    super(props);
    this.element = this.props.content;
  }
  render()
  {
    return (
    <div className="card">{this.element}</div>
    );
  }
}
export default Card;
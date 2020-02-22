import React from "react";
import "./index.css";

class Card extends React.Component
{
  constructor(props){
        super(props);
        this.element = document.createElement("div");
        this.element.className = "card";
        this.element.innerHTML = this.props.content;
  }
  render()
  {
    return (
    <div className="card">{this.props.content}</div>
    );
  }
}
export default Card;
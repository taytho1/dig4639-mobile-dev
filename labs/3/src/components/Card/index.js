import React from "react";
import "./index.css";

class Card extends React.Component
{

    constructor(props)
    {
        super(props);
        this.element = document.createElement("div");
        this.element.className = "card";
        this.element = this.props.content;
    }
//{
  //  return <div className="card"></div>
//}
}
render(<Card />, this.element);
export default Card;
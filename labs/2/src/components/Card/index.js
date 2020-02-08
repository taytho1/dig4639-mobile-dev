import "./index.css"

class Card{

    constrctor(props,span)
    {
        this.props = props;
        this.element = document.createElement("div");
        let card = document.createElement("h1");
        this.element.appendChild(card);
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        span.innerHTML = this.props.content;
        this.element.className = "card";
    }
    render(){
        return this.element;
    }
}
export default Card;
import React from 'react';
import Card from "../Card/index.js";
import data from "../../data.json";

class CardList extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state = {cards: data.cards};
  }

  removeCard = (e) => 
  {
    let title = e.target.getAttribute("datatitle");
    let cardState = this.state.cards;
    let removeCard = cardState.filter((card) => 
    {
      return card.title != title;
    });
    this.setState({cards: removeCard});
  }
  render() 
  {
    return(
      <div>
          {
            this.state.cards.map((card, index) => 
            {
              return <Card key={index} title={card.title} 
                content={card.content} removecard={this.removeCard}/>
            })
          }
      </div>
    );
  }
}
export default CardList;
import React from 'react';
import './Cards.css';

const Cards = ({ cards_content }) => {
  return (
    <div className='card-main-container'>
        {
            cards_content.map((card) => (
                <div className='cards-container'>
                    <img src={card.image} alt={card.description} />
                    <h3>{card.heading}</h3>
                    <p>{card.content}</p>
                </div>
            ))
        }
    </div>
  )
};

export default Cards;
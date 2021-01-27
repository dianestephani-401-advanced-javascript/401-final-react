import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../store/gameTableReducer.js'

import './cardsInHand.scss';



export default function CardsInHand() {

  const cards = useSelector( state => state.game.cards)
  const dispatch = useDispatch()
  console.log(cards)
  
  function handleDispatch(card) {
    dispatch(actions.activateCard(card))
    dispatch(actions.removeCardFromHand(card))
  }

  useEffect(()=> {
    dispatch(actions.getCardsInHand())
  }, [])

  return (
    <>
      <div className="cards-in-hand-grid-container">
            <ul className="cards-in-hand-grid">
            {
              cards.map(card  => <li onClick={() => handleDispatch(card)}><Card key={card._id} className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card></li>
            )
            }
          </ul> 
      </div>
    </>
  );
}


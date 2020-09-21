import React from 'react'
import './Cards.css'
import Card from './Card'

function Cards ({ cardData }) {
  // console.log(cardData)
  return (
    <div className='app_page_card'>
      {cardData &&
        cardData.data.map(item => (
          <Card key={item.flight_number} cardData={item} />
        ))}
    </div>
  )
}

export default Cards

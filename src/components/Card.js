import React from 'react'
import './Card.css'

function Card (props) {
  console.log(props.cardData.launch_success)
  return (
    <div className='card'>
      <img src={props.cardData.links.mission_patch_small} alt='new' />
      <div className='card_details'>
        <h4 className='card_details_id'>
          {props.cardData.mission_name} #{props.cardData.flight_number}
        </h4>
        <div>
          <span className='card_details_common'>Mission Ids:</span>
          <span className='card_details_common_inside'>
            {props.cardData.mission_id.length > 0
              ? props.cardData.mission_id.map(item => {
                  return (
                    <li className='card_details' key={item}>
                      {item}
                    </li>
                  )
                })
              : 'NA'}
          </span>
        </div>
        <div>
          <span className='card_details_common'>Launch Year:</span>
          <span className='card_details_common_inside'>
            {props.cardData.launch_year}
          </span>
        </div>
        <div>
          <span className='card_details_common'>Successful Launch:</span>
          <span className='card_details_common_inside'>
            {props.cardData.launch_success
              ? props.cardData.launch_success.toString()
              : 'NA'}
          </span>
        </div>
        <div>
          <span className='card_details_common'>Successful Landing:</span>
          <span className='card_details_common_inside'>NA</span>
        </div>
      </div>
    </div>
  )
}

export default Card

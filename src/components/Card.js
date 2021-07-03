import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'
const Card = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-img-wrapper">
              <img class="card-img-top" src={props.src} alt="Card cap" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <div class="card-content">
                <p class="card-text">{props.text1}</p>
                <p class='card-text'>{props.text2}</p>
                <Link to={props.src1} class="btn btn-warning text-white">{props.src1Name}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;


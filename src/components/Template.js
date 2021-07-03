import React from 'react';
import car from '../images/car4.jpg';
const Template = (props) => {
    return (
        <main>
            <h1 className="temph1">{props.title}</h1>
            <div className="image main">
                <img src={car} className="image-fluid" alt=""/>
			</div>
        </main>
    )
}

export default Template

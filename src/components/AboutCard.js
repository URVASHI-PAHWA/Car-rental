import React from 'react'
import './Card.css'
const AboutCard = (props) => {
    return (
        <main>
            <div className="container">
                    <div className="row">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img className="card-img-top" src={props.src} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <div className="card-content">
                                        <p className="card-text">{props.text1}</p>
                                        <p className='card-text'>{props.text2}</p>
                                        <a href={props.src1} className="btn btn-warning text-white" target='blank'>{props.src1Name}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}

export default AboutCard

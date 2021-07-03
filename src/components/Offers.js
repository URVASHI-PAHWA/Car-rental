import React from 'react'
import Template from './Template'
import Card from './Card'
import car5 from '../images/car5.jpg'
import car6 from '../images/car6.jpg'
import car7 from '../images/car7.jpeg'
import Footer from './Footer'
const Offers = () => {
    return (
        <>
            <Template title="Offers" />
            <main>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card src={car5} title='Lorem ipsum dolor sit amet, consectetur' 
                        text1='price from: ₹11k per weekend'
                        text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
                            src1='Book' src1Name='Book'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card src={car6} title='Lorem ipsum dolor sit amet, consectetur' 
                        text1='price from: ₹11k per weekend'
                        text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
                            src1='Book' src1Name='Book'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card src={car7} title='Lorem ipsum dolor sit amet, consectetur' 
                        text1='price from: ₹11k per weekend'
                        text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
                            src1='Book' src1Name='Book'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card src={car5} title='Lorem ipsum dolor sit amet, consectetur' 
                        text1='price from: ₹11k per weekend'
                        text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
                            src1='Book' src1Name='Book'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card src={car6} title='Lorem ipsum dolor sit amet, consectetur' 
                        text1='price from: ₹11k per weekend'
                        text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
                            src1='Book' src1Name='Book'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card src={car7} title='Lorem ipsum dolor sit amet, consectetur' 
                        text1='price from: ₹11k per weekend'
                        text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
                            src1='Book' src1Name='Book'/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Offers;

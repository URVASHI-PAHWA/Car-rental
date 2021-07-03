import React from 'react';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car6 from '../images/car6.jpg';
import car5 from '../images/car5.jpg';
import car7 from '../images/car7.jpeg';
import Card from './Card';
import Test from './Testimonial';
import Contact from './Contact';
import './Home.css';
import {Link} from 'react-router-dom'
const Home = () => {
	return (
		<>
			<main>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src={car2} alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src={car1} alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src={car3} alt="Third slide" />
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</main>
			<main>
				<h1 className='text-uppercase mt-9 p-9 fw-bolder' id='h1'> Rent a car at low prices </h1>
				<p id='p'>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum<br /> ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit <br />amet nullam dolore.</p>
				<h1 className='text-uppercase mt-9 p-9 fw-bolder h2' id='h2'> Offers </h1><br />
			</main>
			<main>
				<div className='container-fluid'>
					<div className='row'>
						<div className="col-md-4">
							<Card src={car5} title='Lorem ipsum dolor sit amet, consectetur' 
							text1='price from: ₹11k per weekend'
							text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
							src1='Book' src1Name='Book'></Card>
						</div>
						<div className="col-md-4">
							<Card src={car6} title='Lorem ipsum dolor sit amet, consectetur' 
							text1='price from: ₹11k per weekend'
							text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
							src1='Book' src1Name='Book'></Card>
						</div>
						<div className="col-md-4">
							<Card src={car7} title='Lorem ipsum dolor sit amet, consectetur' 
							text1='price from: ₹11k per weekend'
							text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.Excepteur proident,id est laborum'
							src1='Book' src1Name='Book'></Card>
						</div>
					</div>
				</div>
				<br />
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 col-md-12 col-sm-12-col-xs-12'>
							<center> <Link style={{ color: 'orange', textDecoration: 'none' }} to='Offers'>More Offers --→</Link></center>
						</div>
					</div>
				</div>
				<br />
				<div className='main'>
					<h1 className='text-uppercase mt-9 p-9 fw-bolder' id='test'><center>Testimonials</center></h1><br /><br />
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
								<Test name='Jay Goyal' />
							</div>
							<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
								<Test name='Urvashi' />
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
								<Test name='Jay Goyal' />
							</div>
							<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
								<Test name='Urvashi' />
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
								<Test name='Jay Goyal' />
							</div>
							<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
								<Test name='Urvashi' />
							</div>
						</div>
					</div>
				</div>
			</main><br />
			<br />
			<div id="contact">
			<Contact />
			</div>
		</>
	)
}

export default Home;

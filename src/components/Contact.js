import React from 'react';
import './Contact.css';
import { BiEnvelope } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMap } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
const Contact = () => {
    return (
        <main>
            <div className='container' style={{ background: 'rgb(174,174,174,0.2)' }}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                            <form action='./Home' style={{
                                margin: '0 auto',
                                paddingLeft: '15px',
                                paddingBottom: '15px',
                                fontSize: '15px',
                                letterSpacing: "0.2rem"
                            }}>
                                <h3><center>Contact Us</center></h3><br /><br />
                                <div >
                                    <label id='name'>First Name:</label><br />
                                    <input type='text' name='name' id='iname' placeholder='FName'></input>
                                </div>
                                <div >
                                    <label id='name'>Last Name:</label><br />
                                    <input type='text' name='name' id='iname' placeholder='LName'></input>
                                </div>
                                <div >
                                    <label id='name'>Email:</label><br />
                                    <input type='email' name='name' id='iname' placeholder='Email'></input>
                                </div>
                                <div >
                                    <label id='name'>Phone Number:</label><br />
                                    <input type='text' name='number' id='iname' placeholder='+91999-999-9999'></input>
                                </div>
                                <div >
                                    <label id='name'>Subject:</label><br />
                                    <input type='text' name='subject' id='iname'></input>
                                </div>
                                <div >
                                    <label id='name'>Message:</label><br />
                                    <textarea id='ta' rows='1' cols='40'></textarea>
                                </div>
                                <div>
                                    <button type='submit' className='btn btn-warning text-white' style={{ margin: '10px' }}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-xs-12'>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Contact Info</h3><br /><br />
                            <div>
                                <ul>
                                    <label id='name'><strong>Mail us at:</strong> </label>
                                    <li><span><BiEnvelope /></span>&nbsp;jay0256.cse19@chitkara.edu.in</li>
                                    <li><span><BiEnvelope /></span>&nbsp;urvashi0231.cse19@chitkara.edu.in</li><br /><br />
                                    <label id='name'><strong>Contact:</strong></label>
                                    <li><span><FaPhoneAlt /></span>&nbsp;+91987-654-3210</li><br /><br />
                                    <label id='name'><strong>Address:</strong></label>
                                    <li><span><GrMap /></span>&nbsp;Chitkara University,Chandigarh - Patiala National Highway,
                                    Distt. Patiala, Punjab, India - 140401.
                                    (Around 35 kms from Chandigarh)</li><br /><br /><br />
                                    <label id='name'><strong>Follow:</strong></label><br />
                                    <li style={{ display: 'inline-block', padding: '1em', margin: '0 auto' }} id='icons'><span> <FaTwitter /></span></li>
                                    <li style={{ display: 'inline-block', padding: '1em', margin: '0 auto' }} id='icons'><span> <FaFacebookMessenger /></span></li>
                                    <li style={{ display: 'inline-block', padding: '1em', margin: '0 auto' }} id='icons'><span>  <FaInstagram /></span></li>
                                    <li style={{ display: 'inline-block', padding: '1em', margin: '0 auto' }} id='icons'><span>   <FaTelegramPlane /></span></li>
                                    <br /><br />
                                    <li style={{ fontSize: '0.8em', color: 'rgba(88, 88, 88, 0.5)' }}>Copyright © 2021 J&U</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    )
}

export default Contact

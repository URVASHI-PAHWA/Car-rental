import React from 'react'
import './Footer.css'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <main className="Footer">
            <ul className="icons">
                <li>
                    <a href="#" className="icon style2"><FaTwitter /></a>
                </li>
                <li>
                    <a href="#" className="icon style2"><FaFacebookF /></a>
                </li>
                <li>
                    <a href="#" className="icon style2"><FaInstagram /></a>
                </li>
                <li>
                    <a href="#" className="icon style2"><FaLinkedinIn /></a>
                </li>
            </ul>
            <ul class="copyright">
                <li>Copyright © 2021 J&U </li>
            </ul>
        </main>
    )
}
export default Footer

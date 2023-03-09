import React from "react"
import { MdEmail } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5"
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import { Link } from "react-router-dom"


export default function Footer(){
    return(
        <footer>
            <div className="footer-info">
                <div className="footer-menu">
                    <h3 className="heading footer-heading">Menu</h3>
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/timetable">Timetable</Link></li>
                        <li><Link to="/trainers">Trainers</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/membership">Join Now</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3 className="heading footer-heading">Contact</h3>
                    <ul className="links">
                        <li className="icon-text"><IoLocationSharp className="location-icon" size="1.3rem"/>The Forge Retail Park<br/>Biggar Street<br/>Glasgow<br/>G31 4BH </li>

                        <li className="icon-text"><MdEmail size="1.3rem"/>purefitness@gmail.com</li>
                        
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">Pure Fitness. All rights reserved</p>

                <div className="footer-social">
                    <p>Follow us</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookSquare size="2rem"/></a>
                        <a href="#"><FaInstagram size="2rem" /></a>
                        <a href="#"><FaTwitter size="2rem" /></a>
                    </div>
                    
                </div>
            </div>
            

            
        </footer>
    )
}
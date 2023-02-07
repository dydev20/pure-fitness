import React from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { FaDumbbell } from "react-icons/fa"

import "./Navbar.css"
import { NavLink } from "react-router-dom"

export default function Navbar(){

    const [mobileNav,setMobileNav]=React.useState(false)
    
    function navLinkStyles({isActive}){
        return{
            color: isActive ? "#0c7946": "#333333"
        }
    }

    function toggleMobileNav(){
        setMobileNav(!mobileNav)
       
    }

    const navbarToggleStyles={
        color:mobileNav ? "white" : "#333333"
    }

    /* prevent vertical scrolling when mobile navbar is open */
    React.useEffect(()=>{
        console.log(mobileNav)
        console.log(window.screen.width)
        {/* when navbar link is clicked, mobileNav state is toggled to false to close the mobile navbar. Also toggles in desktop navbar which prevents scrolling - only prevent scrolling for mobile navbar*/ }
        if(mobileNav==true && window.screen.width<1020){
            document.body.style.overflow="hidden"
        }else if(mobileNav==false){
            document.body.style.overflow="visible"
        }

    },[mobileNav])

    return(
        <nav className="navbar">
            <div className="brand">
                <a href="/">
                    
                    <FaDumbbell size="1.5rem" className="logo" />
                </a>
                <h3>Pure Fitness</h3>
            </div>
            
            
            <div className="navbar-toggle" onClick={toggleMobileNav} style={navbarToggleStyles}>
                {mobileNav ? <AiOutlineClose  size="2rem"/> : <AiOutlineMenu  size="2rem" />}
            </div>

            <ul className={mobileNav ? "navbar-links active" : "navbar-links"} onClick={toggleMobileNav}>
                
                <li><NavLink to="/" style={navLinkStyles} >Home</NavLink></li>
                <li><NavLink to="/timetable" style={navLinkStyles} >Timetable</NavLink></li>
                <li><NavLink to="/trainers" style={navLinkStyles} >Trainers</NavLink></li>
                <li><NavLink to="/faq" style={navLinkStyles} >FAQ</NavLink></li>
                <li><NavLink to="/contact" style={navLinkStyles} >Contact</NavLink></li>
                <li><NavLink to="/membership" style={navLinkStyles} >Join Now</NavLink></li>
            </ul>
            
        </nav>
    )
}
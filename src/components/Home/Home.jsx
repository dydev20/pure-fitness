import React from "react"
import {AiOutlineWifi} from "react-icons/ai"
import AddressMap from "./AddressMap"
import "./Home.css"

export default function Home(){
    return(
        <div className="home">
            <div className="hero">
                <div className="overlay">

                    <div className="cta-container">
                        <div className="hero-text heading">
                            <h2 >Welcome to Pure Fitness</h2>
                            <h3>Get fit now</h3>
                        </div>
                    
                        <div className="cta-buttons">
                            <a href="/membership" className="button join-btn">Join Now</a>
                            <a href="/trainers" className="button grey-btn trainers-btn">Personal Trainers</a>
                            
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="page-container">
                <h1 className="heading content-heading">About Us</h1>
                
                <div className="about-container">
                    <div className="about-content">
                        <img src="src/assets/gym-equipment.jpg" alt="gym equipment" className="about-img"/>
                        <p className="about-text">We offer a wide range of equipments including cardio equipment, free weights and fixed resistance weights. All of our equipments are top of the range and they go through frequent maintenance to ensure they operate correctly for your safety and to prevent a broken machine from stopping your gym routine.</p>
                    </div>
                    <div className="about-content about-trainer">
                        <p className="about-text">All of our personal trainers are fully qualified and can give professional help and advice when needed.</p>
                        <img src="src/assets/trainers.jpg" alt="personal trainer" className="about-img" />
                    </div>
                    
                    
                   <div className="address-container">
                        <ul>
                            <li>The Forge Retail Park</li>
                            <li>Biggar Street</li>
                            <li>Glasgow</li>
                            <li>G31 4BH</li>
                        </ul>
                        
                        <AddressMap />
                    </div>

                </div>

            </div>
        </div>
    )
}
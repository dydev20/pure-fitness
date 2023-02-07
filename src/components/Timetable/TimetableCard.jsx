import React from "react"
import "./TimetableCard.css"


export default function TimetableCard(props){
    return(
        <div className="card timetable-card">
            <img src={props.image} alt={props.image} className="classes-img"/>
            <h2 >{props.title}</h2>

             
            <ul className="class-info">
                <li className="days"><strong>Days</strong></li>
                <li>{props.days}</li>

                <li className="time"><strong>Time</strong></li>
                <li>{props.time}</li>
            </ul>
            
        </div>
    )
}
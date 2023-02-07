import React from "react"
import timetableData from "../../data/timetable"
import TimetableCard from "./TimetableCard"
import "./Timetable.css"


export default function Timetable(){
    
    return(
        <div>
            <section className="timetable green-page-container">
                <h1 className="heading white-heading content-heading">Group Workouts</h1>
                <p>We run a range of group workouts for those that would like to exercise as part of a group. This is a good opportunity to meet new friends and make your gym experience more fun! Simply refer to the group workouts timetable, choose a group workout class and sign up to get started</p>

                {timetableData.map(classes=>(
                    <TimetableCard 
                        key={classes.id}
                        
                        image={classes.image}
                        title={classes.title}
                        days={classes.days}
                        time={classes.time}
                    
                    />
                ))}
            </section>    
        </div>
    )
}
import React from "react"
import membershipData from "../../data/membership"
import MembershipCard from "./MembershipCard"
import "./Membership.css"

export default function Membership(){

    const [membership,setMembership]=React.useState(membershipData)

    const [membershipOption, setMembershipOption] = React.useState("")

    function handleClick(id) {
        setMembershipOption(id)
    }

    return(
        <div className="membership">
            <h1 className="heading white-heading content-heading">Memberships</h1>
            <div className="cards-container">
                {
                    membership.map(membership=>(
                        <MembershipCard 
                            key={membership.id}
                            id={membership.id}
                            title={membership.title}
                            description={membership.description}
                            price={membership.price}
                            handleClick={handleClick}
                            membershipOption={membershipOption}

                        />
                    ))
                }

                
            </div>
            <div className="button-container" >
               <button className="button grey-btn join-btn">Join Now</button> 
            </div>
            
        </div>
    )
}
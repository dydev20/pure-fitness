import React from "react"
import membershipData from "../../data/membership"
import MembershipCard from "./MembershipCard"
import "./Membership.css"
import { HiOutlineDocumentText, HiOutlineClock, HiOutlineCurrencyPound, HiOutlineWifi } from "react-icons/hi"

export default function Membership(){

    const [membership,setMembership]=React.useState(membershipData)

    const [membershipOption, setMembershipOption] = React.useState("")

    function handleClick(id) {
        setMembershipOption(id)
    }

    return(
        <div className="membership page-container">
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

            <div className="benefits-container">
                <div>
                    <HiOutlineDocumentText size="3rem"/>
                    <h4>No contract</h4>
                </div>
                <div>
                    <HiOutlineClock size="3rem"/>
                    <h4>Open 24/7</h4>
                </div>
                <div>
                    <HiOutlineCurrencyPound size="3rem"/>
                    <h4>Low cost</h4>
                </div>
                <div>
                    <HiOutlineWifi size="3rem"/>
                    <h4>Free WiFi</h4>
                </div>
            </div>
            
        </div>
    )
}
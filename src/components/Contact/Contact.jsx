import React from "react"
import "./Contact.css"

export default function Contact(){

    const [formData,setFormData]=React.useState({
        fullName:"",
        email:"",
        phone:"",
        enquiry:""
    })

    const [formSubmit,setFormSubmit]=React.useState(false)

    function handleChange(event){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
            
        })
        
    }

    function handleSubmit(event){
        event.preventDefault()
        setFormSubmit(true)
        
    }

    return(
        <div className="page-container">
            <h1 className="heading content-heading">Contact Us</h1>
            {/* render message when form is submitted */}
            {formSubmit && <p className="status"><strong>Your enquiry has been sent, thank you for contacting us</strong></p>}

            <form onSubmit={handleSubmit}>

                {/* full name */}
                <div className="input-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input 
                        type="text" 
                        id="full-name" 
                        className="form-input" 
                        name="fullName"
                        onChange={handleChange}
                        value={formData.fullName}
                        required 

                    />
                </div>
                
                {/* email */}
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        
                        type="email" 
                        id="email" 
                        className="form-input" 
                        name="email"
                        onChange={handleChange}
                        value={formData.email} 
                        required

                    />
                </div>

                {/* phone number */}
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text" 
                        id="phone" 
                        className="form-input" 
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone} 
                        pattern="[0-9]{7,11}"
                        title="Please enter home telephone number or mobile number"
                        required

                    />
                </div>
                
                {/* enquiry */}
                <div className="input-group">
                    <label htmlFor="enquiry">Enquiry</label>
                    <textarea 
                        name="enquiry" 
                        id="enquiry" 
                        cols="30" 
                        rows="10" 
                        className="form-input"
                        onChange={handleChange}
                        value={formData.enquiry}
                        required
                    >

                    </textarea>
                </div>
                
                <button className="button green-btn send-btn">Send Enquiry</button>
            </form>
        </div>
    )
}
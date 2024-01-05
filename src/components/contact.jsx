import React from "react";
import Button from "./button";
import "../Assets/Css/contact/contact.css"
const Contact=()=>{
    return(
        <div className="contact">
            <h2 className="title">
               Interested In Delving Deeper Into The Project?
            </h2>
            <p className="info">
            If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span>hello@abc.com</span> or give us a call at +91 480 20802730.
            </p>
            <div className="buttons">
                <Button BtnText={"Ring Us On Skype"} StyleName={"skype"}/>
                <Button BtnText={"Contact Us"} StyleName={"contactbtn"}/>
            </div>
        </div>
    )
}
export default Contact

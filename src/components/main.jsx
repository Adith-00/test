import React from "react";
import Hero from "./hero";
import { closeButton } from "../Assets/Images/image";
import "../Assets/Css/main/main.css"
import CardSection from "./cardsection";
import Contributions from "./contribution";
import Contact from "./contact";

const Main=()=>{
return(
     <div className="main wrapper">
         <div className="close">
            <h1 className="image"><img src={closeButton} alt="close" /></h1>
            </div>
         <Hero/>
         <CardSection/>
         <Contributions/>
         <Contact/>
         <p className="footer">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
     </div>
)

}
export default Main
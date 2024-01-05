import React from "react";
import { hero } from "../Assets/Images/image";
import Button from "./button";

const Hero=()=>{
    return(
        <div className="hero">
        <h1 className="heading">Epic Games : An American Video Game And Software Developer And Publisher Based In Cary, North Carolina.</h1>
        <h2 className="image">
            <img src={hero} alt="Hero" />
        </h2>
        <div className="heroInfo">
            <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
            <Button BtnText={"Visit Website"} StyleName={"heroButton"}/>
        </div>
        
     </div>
    )
}
export default Hero 
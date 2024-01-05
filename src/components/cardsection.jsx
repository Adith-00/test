import React from "react";
import { cardData } from "../Assets/const";
import Cards from "./card";
import "../Assets/Css/cards/card.css"

const CardSection =()=>{
    return (
        <div className="CardSection">
            <div className="cardholder">
            {cardData.map((item)=>{
               const { cardImage,text}=item
                return<Cards cardImage={cardImage} cardText={text}/>
            })

            }     
            </div>
            
        </div>
    )
}
export default CardSection
import React from "react";

const Cards=({cardImage,cardText})=>{
    return(
        <div className="cards">
            <h1 className="image">
                <img src={cardImage} alt="CardImage" />
            </h1>
            <p className="cardtext">
                {cardText}
            </p>
        </div>
    )
}
export default Cards
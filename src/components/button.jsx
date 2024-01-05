import React from "react";

const Button=({StyleName,BtnFun,BtnText})=>{
    return(
        <button className={StyleName} onClick={BtnFun}>{BtnText}</button>
    )
}
export default Button
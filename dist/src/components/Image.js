import React from "react";
import posterImg from "../img/posterImg.PNG";
import "../css/image.css";

export default function Image()
{
    return(
        <>
            <div className="image">
                <img src={posterImg} alt="demo img" className="img-set" />
                <p>Program Title</p>
            </div>
        </>
    )
}
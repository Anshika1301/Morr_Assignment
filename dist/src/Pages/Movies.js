import React from "react";
import Image from "../components/Image";
import "../css/movies.css";

export default function Movies()
{

    return(
        <>
            <div className="home">
                <h3> Poplar Movies</h3>
            </div>
            <div>
                <Image/><Image/><Image/><Image/><Image/><Image/><Image/>
            </div>
        </>

    );
}
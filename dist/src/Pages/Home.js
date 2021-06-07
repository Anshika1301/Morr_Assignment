import React from "react";
import "../css/home.css";
import theat from "../img/theat.PNG";
import {Link} from "react-router-dom";

export default function Home()
{
    return(
        <>
            <div className="home">
                <h3> Poplar Titles</h3>
            </div>
            <div className="images">
                <div className="img-box">
                    <img src={theat} alt="movie image" className="img-set" />
                    <Link to='/series'><h3>Series</h3></Link>
                    <p>Popular Series</p>
                </div>
                <div className="img-box">
                    <img src={theat} alt="movie image" className="img-set" />
                    <Link to='/movies'><h3>Movies</h3></Link>
                    <p>Popular Movies</p>
                </div>        
            </div>
        </>
        

    );
}


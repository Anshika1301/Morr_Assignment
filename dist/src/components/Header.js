import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/header.css';
import {Link} from "react-router-dom";

export default function Header()
{
    return(
        <>
            <div className="header">
                <input type="checkbox" id="chk"/>
                <label htmlFor="chk" className="show-btn">
                    <FontAwesomeIcon icon="bars" />
                </label>
                <Link to="/"><h2 className="navbar-brand" href="">DEMO Streaming</h2></Link>
                <ul className="menu">
                    <li>Log in</li>
                    <li className="second_li"><span>Start your free trial</span></li>
                    <label htmlFor="chk" className="hide-btn">
                        <FontAwesomeIcon icon="times" />
                    </label>
                </ul>
            </div>
        
        </>

    );
}
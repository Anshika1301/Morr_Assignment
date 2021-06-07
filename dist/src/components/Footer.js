import React from "react";
import '../css/footer.css';
import imag1 from "../img/imag1.png";
import img3 from "../img/img3.png";
import facebook from "../img/facebook.png";
import insta from "../img/insta.png";
import twitt from "../img/twitt.png";

export default function Footer()
{
    return(
        <>
            
            <footer>
                <section className="section-1">
                    <ul>
                        <li>Home<span>|</span></li>
                        <li>Terms and Conditions<span>|</span></li>
                        <li>Privacy Policy<span>|</span></li>
                        <li>Collection Statement<span>|</span></li>
                        <li>Help<span>|</span></li>
                        <li>Manage Account</li>
                    </ul>
                </section>

                <section className="section-2">
                    <p>Copyright &copy; 2016 DEMO Streaming All Rights Reserved</p>
                </section>

                <section className="section-3">
                    <div className="first-list">
                        <img src={facebook} alt="facebook img" className="s1"/>
                        <img src={twitt} alt="twitter img" className="s2"/>
                        <img src={insta} alt="insta img" className="s3"/>
                    </div>
                    <div className="second_list">
                        <img src={imag1} alt="img1" className="i1" />
                        <img src={img3} alt="img1" className="i3"/>
                    </div>
                </section>
            </footer>
        </>

    );
}
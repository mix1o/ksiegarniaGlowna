import React from 'react';
import "../App.css";
import czaraognia from "../img/czaraognia.jpg";
import ostatnie from "../img/ostatnie.jpg";
import {Link} from "react-router-dom";
import CategoryFromBase from './CategoryFromBase';

function LeftBox(){
    return(
        <div className="left-box">
            <div className="about">
                <div className="socials">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-youtube"></i>
            </div>
            <div className="links">
                <Link to="/sign" className="sign">Zaloguj się<i className="fas fa-user"></i></Link>
                <Link to="/books" className="sign">Wszystkie książki<i className="fas fa-book-open"></i></Link>
            </div>
            </div>
            <div className="inside-box">
                
                <div className="container-text-left">
                    <i className="fas fa-medal"></i>
                    <h6 className="heading-6">Posiadamy najlepsze tytuły wszechczasów</h6>
                <div className="center-left">
                <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante a lacus fringilla placerat quis in velit. Cras eros arcu, sodales in consectetur id, elementum ac diam. Vestibulum vitae enim sit amet dui tempor porta sit amet eget velit. </p>
                <p className="text-left">Ut elementum sagittis justo, nec ullamcorper arcu dignissim non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porttitor orci orci, quis tempor massa ullamcorr</p>
                </div>  
                </div>
                <div className="container-text-left">
                    <i className="fas fa-chart-line"></i>
                    <h6 className="heading-6">Jesteśmy na rynku od 5 lat</h6>
                <div className="center-left">
                <p className="text-left">
                Nullam aliquam mi in magna placerat fermentum. Phasellus et metus ut mauris euismod tristique. Maecenas sit amet lacus ac mi tempus tempus sed eleifend odio. Nam tempor magna lorem.
                </p>
                <p className="text-left"> Vivamus dignissim, ipsum non tincidunt scelerisque, metus sem vehicula turpis, ac faucibus massa enim sed massa. Donec a nisl ornare, auctor sapien nec, aliquam mi.</p>

                </div>
                </div>
            </div>
            <p className="para-footer">Wszelkie prawa zastrzeżone &copy;</p>
        </div>
    );
}
export default LeftBox;
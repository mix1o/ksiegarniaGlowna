import React from 'react';
import "../App.css";
import logoheader from "../img/logoheader.png"
import {Link} from "react-router-dom";

function RightBox(){
    return (
        <div className="right-box">
            <img src={logoheader} className="logo" alt="Logo"/>
            <h1 className="heading-1">
                <span>Twoja</span><br/>księgarnia
            </h1>
            <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic, officiis exercitationem quas debitis, soluta dolorem corporis est cum pariatur repellendus impedit dignissimos tempore iure. Dolores dolorem labore eum assumenda? Beatae unde cum maxime, quia voluptates expedita, a atque ipsa natus nobis repudiandae aliquid? Quidem a et quam.
            </p>
            <p className="para">
                Iste rem harum repellat illo numquam quo rerum exercitationem repudiandae culpa tempore molestiae, officia totam laudantium explicabo provident quaerat temporibus assumenda! Quis fugiat consequuntur, similique molestias debitis porro dignissimos natus ducimus pariatur suscipit veritatis modi voluptatibus aliquam exercitationem deleniti. Dignissimos quibusdam modi quas ducimus, dicta totam placeat blanditiis qui magni exercitationem perferendis.
            </p>
            <Link to="/registration" className="sign-up">Zajerestruj się</Link>
        </div>
    )
}
export default RightBox;
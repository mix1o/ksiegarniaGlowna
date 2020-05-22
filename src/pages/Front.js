import React from "react";
import LeftBox from "../Components/LeftBox";
// ale przenies sobie to left i right box z pages do /components
// i zmien nazwe components na male litery
import RightBox from "../Components/RightBox";
import "../App.css";

function Front(){

    return (
        <div className="container">
            <LeftBox/>
            <RightBox/>
        </div>
    )

}
export default Front;
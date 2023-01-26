import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer(){
    return(
        <footer> <p> {currentYear}  Daeshaun Willis </p></footer>
    )
};

export default Footer
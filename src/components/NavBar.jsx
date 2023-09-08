import React from "react";
import Title from '../assets/title-text.png';

function NavBar() {

    return (
        <div className="flex flex-row justify-center bg-white border-b-2 ">
            <img src={Title} alt="Title" />
        </div>
    )
}

export default NavBar;
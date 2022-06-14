import React from "react";
import "./style.css";
import Logo from "../assets/img/logo.png";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const Header = () => {
    const goSettings = () => {
        window.location.href = '/settings';
    }
    return(
        <div className="border_header">
            <div className="Navbar">
                <figure onClick={() => goSettings()}>
                     <AiOutlineSetting />
                </figure>
                <figure className="Logo">
                    <img src={Logo} alt="."/>
                </figure>
                <figure>
                    <CgProfile />
                </figure>
            </div>
        </div>
    );
}
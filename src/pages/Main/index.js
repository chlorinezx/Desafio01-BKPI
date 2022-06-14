import React from "react";
import "./style.css";

import { Header } from "../../components/Header";
import { Pokemon } from "../../components/Pokemon";

export const Main = () => {
    return(
        <>
            <Header/>
            
            <div className="container">
                <Pokemon/>         
            </div>
        </>
    );
}
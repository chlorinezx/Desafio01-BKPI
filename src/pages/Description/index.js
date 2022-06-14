import React from "react";
import { useParams  } from "react-router-dom";
import "./style.css";

import { Header } from '../../components/Header';
import { Pokemon } from "../../components/Pokemon";

export const Description = () => {

    const { id } = useParams();

    return(
        <>
            <Header/>
            <section className="container--pokemon">
                <Pokemon id={id}/>
                <div className="pokemon--types">
                    <div className="type">
                        <span>Herbal</span>
                    </div>
                    <div className="type">
                        <span>Poison</span>
                    </div>
                </div>
            </section>
            <section className="container--pokemon--attributes">   
                <section className="pokemon--attributes">
                    <div className="attribute">
                        <p>6.9 m</p>
                        <span>Altura</span>
                    </div>
                    <div className="attribute">
                        <p>0.7 Kg.</p>
                        <span>Peso</span>
                    </div>
                </section>
            </section>
        </>
    );
}
import React, { useState } from 'react';
import './style.css';
import bulbasaur from '../assets/img/bulbasaur.png'
import ivysaur from '../assets/img/ivysaur.png'
import venusaur from '../assets/img/venusaur.png'
import charmander from '../assets/img/charmander.png'
import charmeleon from '../assets/img/charmeleon.png'
import charizard from '../assets/img/charizard.png'

export const Pokemon = (props) => {
  const goDescription = (id) => {
    window.location.href = `/description/${id}`;
  }
 
  const pokemons = [" ",
    <div className="pokemons" id="bulbasaur" onClick={() => goDescription(1) }>
            <img src={bulbasaur} alt="icon_bulbasaur" className='bulbasaur'/>
            <div className="description_pokemons">
                <h3 className="id">#001</h3>
                <h3 className="name">Bulbasaur</h3>
            </div>
        </div>
,   
        <div className="pokemons" onClick={() => goDescription(2) }>
            <img className='charmander' src={charmander} alt='charmander'/>  
            <div className="description_charmander">
                <h3 className="id">#002</h3>
                <h3 className="name">Charmander</h3>
            </div>
        </div>
,
        <div className="pokemons" onClick={() => goDescription(3) }>
           <img className="ivysaur" src={ivysaur} alt="venusaur"/>
            <div className="description_ivysaur"> 
                <h3 className="id">#003</h3>
                <h3 className="name">Ivysaur</h3>
            </div>
        </div>
,
        <div className="pokemons" id="ivysaur" onClick={() => goDescription(4) }>
            <img className='Charmeleon' src={charmeleon} alt="charmeleon"/>
            <div className="description_charmeleon">
                <h3 className="id">#004</h3>
                <h3 className="name">Charmeleon</h3>
            </div>
        </div>
,
        <div className="pokemons" id="charmeleon" onClick={() => goDescription(5) }>
            <img className='venusaur' src={venusaur} alt="venusaur"/>
            <div className="description_venusaur">
                <h3 className="id">#005</h3>
                <h3 className="name">venusaur</h3>
            </div>
        </div>
,
        <div className="pokemons" id="charizard" onClick={() => goDescription(6) }>
            <img className="charizard" src={charizard} alt="charizard"/>
            <div className="description_charizard description">
                <h3 className="id">#006</h3>
                <h3 className="name">charizard</h3>
            </div>
        </div>
  ]

const RenderPoke = () => {
    let pokemonsAll;
    let pokemonClick;

    if(props.id){
        pokemons.map((item, index) => {
            if(props.id == index){
                pokemonClick = <>{item}</>;
            }  
        })
    }else{
        pokemonsAll = <>
            <div className="pokemons" id="bulbasaur" onClick={() => goDescription(1) }>
            <img src={bulbasaur} alt="icon_bulbasaur" className='bulbasaur'/>
            <div className="description_pokemons description">
                <h3 className="id">#001</h3>
                <h3 className="name">Bulbasaur</h3>
            </div>
        </div>
   
        <div className="pokemons" onClick={() => goDescription(2) }>
            <img className='charmander' src={charmander} alt='charmander'/>  
            <div className="description_charmander description">
                <h3 className="id">#002</h3>
                <h3 className="name">Charmander</h3>
            </div>
        </div>

        <div className="pokemons" onClick={() => goDescription(3) }>
           <img className="ivysaur" src={ivysaur} alt="venusaur"/>
            <div className="description_ivysaur description"> 
                <h3 className="id">#003</h3>
                <h3 className="name">Ivysaur</h3>
            </div>
        </div>

        <div className="pokemons" id="ivysaur" onClick={() => goDescription(4) }>
            <img className='Charmeleon' src={charmeleon} alt="charmeleon"/>
            <div className="description_charmeleon description">
                <h3 className="id">#004</h3>
                <h3 className="name">Charmeleon</h3>
            </div>
        </div>

        <div className="pokemons" id="charmeleon" onClick={() => goDescription(5) }>
            <img className='venusaur' src={venusaur} alt="venusaur"/>
            <div className="description_venusaur description" >
                <h3 className="id">#005</h3>
                <h3 className="name">venusaur</h3>
            </div>
        </div>

        <div className="pokemons" id="charizard" onClick={() => goDescription(6) }>
            <img className="charizard" src={charizard} alt="charizard"/>
            <div className="description_charizard description">
                <h3 className="id">#006</h3>
                <h3 className="name">charizard</h3>
            </div>
        </div>
        </>
    }
    

    return pokemonsAll ? pokemonsAll : pokemonClick;
  }
  
  return (
      <>
        {RenderPoke()}
      </>
  );
}
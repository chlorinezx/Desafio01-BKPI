import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './pages/MainRoutes';

function App() {
  
    const theme = localStorage.getItem("theme");

    document.documentElement.style.setProperty('--primary', '#F2250A');
    document.documentElement.style.setProperty('--secondary', '#20CBBB');
    document.documentElement.style.setProperty('--tertiary', '#24272E');
    document.documentElement.style.setProperty('--quaternary', '#D6DBDE');
    document.documentElement.style.setProperty('--quinquennial', '#81BAC3');

  if(localStorage){
    
    if(theme === "dark"){
    document.documentElement.style.setProperty('--primary', '#F2250A');
    document.documentElement.style.setProperty('--secondary', '#D6DBDE');
    document.documentElement.style.setProperty('--tertiary', '#81BAC3');
    document.documentElement.style.setProperty('--quaternary', '#24272E');
    document.documentElement.style.setProperty('--quinquennial', '#D6DBDE');
  }
  }

  return (
      <BrowserRouter>
        <div className="app">
          <div className="Main">
              <div className="Main__pokedex">
                <MainRoutes />
              </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;

import  React, { useState } from 'react';
import { Header } from '../../components/Header';
import './style.css';

export const Settings = () => {

    const theme = localStorage.getItem("theme");
    const checked = localStorage.getItem("checked");


    const [dark, setDark] = useState(!localStorage.getItem("checked"));
  
      if (dark) {
        localStorage.setItem("checked", true)
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("checked", false)
        localStorage.setItem("theme", "light");
      }   

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
      <>
        <Header/>
        <section className='container--settings'>
          <section className='container--dark--mode'>
            <div>
                <p>Dark Mode</p>
            </div>
            <label className="switch">
              <input id="colorSchemeToggler" type="checkbox" onChange={() => {}} onClick={() => setDark(!dark)} />
              <span className="slider round"></span>
            </label>
          </section>
        </section>
      </>
  );
}
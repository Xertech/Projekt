import React, { Component } from 'react';
import architectura from './architectura.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h3>Architektura systemu</h3>
            <img src={architectura} alt="logo" />

            Modyfikacja aplikacji z lab9<br/>
            Zmiany:<br/>
            <p>Wprowadzanie limitu indeksu k(20)  <br/>
	    Przeglad historii obliczanych wartosci(Fib.js, History.js)<br/>
            Fib.js - dodano metody umożliwiające interakcję z modułem historii<br/>
	    Modyfikacja funkcji wyliczajacej wartosci ciagu Fibonacciego(Index.js)<br/>
	    Strona glowna(Main.js)<br/>
	    Dokumentacja(Documentation.js)<br/></p><br/>
       

            <Link to="/">Strona główna</Link>
            </header>
        </div>
    );
  };
  
	   

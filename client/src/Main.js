import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Realizacja zadania nr1 w ramach laboratorium PFSwChO
            </a>
            <p>Konrad Przadka</p> 
            
            <Link to="/fibcal">Fib calc</Link>
            <Link to="/docs">Dokumentacja</Link>
            </header>
        </div>
    );
  };

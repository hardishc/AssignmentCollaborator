import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Card from './components/Cards/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card/>
    </div>
  );
}

export default App;

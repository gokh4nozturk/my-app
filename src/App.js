import React from 'react';
import './App.css';
import HavaDurumu from "./HavaDurumu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className={"App-header"}>
          <HavaDurumu durum = {"güneşli"}/>
          <HavaDurumu durum = {"yağmurlu"}/>
          <HavaDurumu durum = {"bulutlu"}/>
        </header>
      </header>
    </div>
  );
}

export default App;

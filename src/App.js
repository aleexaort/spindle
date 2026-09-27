import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  componentDidMount() {
    // Mensaje en consola al cargar la app
    console.log('¡La aplicación Spindle se ha cargado correctamente!');
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        
        <main className="catalog-section">
          <h2>Canciones guardadas</h2>
          
          <div className="song-list">
            <Song 
              title="Fall in Love Alone" 
              artist="Stacey Ryan" 
              album="Fall in Love Alone - Single"
              duration="3:25" 
            />
            <Song 
              title="Submarine" 
              artist="Alex Turner" 
              album="Submarine OST"
              duration="2:40" 
            />
            <Song 
              title="Electric Feel" 
              artist="MGMT" 
              album="Oracular Spectacular"
              duration="3:49" 
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
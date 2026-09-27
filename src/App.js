import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import './App.css';

const App = () => {
  // Datos para las portadas
  const [searchResults] = useState([
    {
      id: '1',
      title: 'Fall in Love Alone',
      artist: 'Stacey Ryan',
      album: 'Fall in Love Alone - Single',
      duration: '3:25',
      coverBg: '#C3E8DD',
    },
    {
      id: '2',
      title: 'Submarine',
      artist: 'Alex Turner',
      album: 'Submarine OST',
      duration: '2:40',
      coverBg: '#D8D4F2',
    },
    {
      id: '3',
      title: 'Electric Feel',
      artist: 'MGMT',
      album: 'Oracular Spectacular',
      duration: '3:49',
      coverBg: '#B3E5FC',
    },
    {
      id: '4',
      title: 'Sunflower',
      artist: 'Post Malone & Swae Lee',
      album: 'Spider-Man: Into the Spider-Verse',
      duration: '2:38',
      coverBg: '#FFE082',
    },
  ]);

  const [library, setLibrary] = useState([]);

  useEffect(() => {
    console.log('¡Biblioteca Spindle actualizada! Canciones:', library);
  }, [library]);

  const handleAddSong = (songToAdd) => {
    const isAlreadyAdded = library.some((song) => song.id === songToAdd.id);
    if (!isAlreadyAdded) {
      setLibrary([...library, songToAdd]);
    }
  };

  return (
    <div className="spindle-app-container">
      <Header />
      
      <main className="spindle-main-grid">
        <SearchResults 
          songs={searchResults} 
          onAddSong={handleAddSong} 
          librarySongs={library} 
        />
        <Library librarySongs={library} />
      </main>
    </div>
  );
};

export default App;
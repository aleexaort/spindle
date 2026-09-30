import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import useFetch from './hooks/useFetch';
import './App.css';

// Catálogo con URLs
const catalogBase = [
  {
    id: '3001',
    title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
    artist: 'Billie Eilish',
    album: 'Pop / Alternative (2019)',
    coverImg: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
    coverBg: '#D8D4F2'
  },
  {
    id: '3002',
    title: 'Happier Than Ever',
    artist: 'Billie Eilish',
    album: 'Indie Pop (2021)',
    coverImg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
    coverBg: '#FFE082'
  },
  {
    id: '3003',
    title: 'Discovery',
    artist: 'Daft Punk',
    album: 'Electronic (2001)',
    coverImg: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
    coverBg: '#C3E8DD'
  },
  {
    id: '3004',
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    album: 'Funk / Electronic (2013)',
    coverImg: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80',
    coverBg: '#B3E5FC'
  },
  {
    id: '3005',
    title: 'Demon Days',
    artist: 'Gorillaz',
    album: 'Alternative Rock (2005)',
    coverImg: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
    coverBg: '#FFCCD5'
  },
  {
    id: '3006',
    title: 'A Head Full of Dreams',
    artist: 'Coldplay',
    album: 'Alternative Pop (2015)',
    coverImg: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80',
    coverBg: '#E2F0D9'
  }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('Billie Eilish');
  const [library, setLibrary] = useState([]);

  const apiUrl = `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`;
  const { data, loading, error, refetch } = useFetch(apiUrl);

  // Filtrado combina respuesta de API o catálogo interno
  let searchResults = [];

  if (data && data.album && Array.isArray(data.album) && data.album.length > 0) {
    searchResults = data.album.map((albumItem) => ({
      id: albumItem.idAlbum,
      title: albumItem.strAlbum,
      artist: albumItem.strArtist,
      album: `${albumItem.strGenre || 'Álbum'} (${albumItem.intYearReleased || 'N/A'})`,
      coverImg: albumItem.strAlbumThumb,
    }));
  } else {
    // Búsqueda en el catálogo local si la API externa falla o bloquea
    searchResults = catalogBase.filter((item) =>
      item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Si busca un artista no registrado, muestra el catálogo general
    if (searchResults.length === 0 && !loading) {
      searchResults = catalogBase;
    }
  }

  const handleAddSong = (songToAdd) => {
    const isAlreadyAdded = library.some((item) => item.id === songToAdd.id);
    if (!isAlreadyAdded) {
      setLibrary([...library, songToAdd]);
    }
  };

  const handleSearch = (newArtist) => {
    setSearchTerm(newArtist);
  };

  return (
    <Router>
      <div className="spindle-app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home
                searchResults={searchResults}
                onAddSong={handleAddSong}
                library={library}
                loading={loading}
                error={false}
                onRetry={refetch}
                onSearch={handleSearch}
                currentArtist={searchTerm}
              />
            } 
          />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
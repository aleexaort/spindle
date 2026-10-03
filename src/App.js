import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import useFetch from './hooks/useFetch';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppContainer } from './App.styles';

const defaultCatalog = [
  {
    id: '2113118',
    title: 'Heathen Chemistry',
    artist: 'Oasis',
    album: 'Indie (2002)',
    genre: 'Indie',
    year: '2002',
    coverImg: 'https://www.theaudiodb.com/images/media/album/thumb/e3lkdt1788171576.jpg',
    coverBg: '#E2D9F3',
    description: 'Heathen Chemistry is the fifth studio album by the English rock band Oasis, released in 2002 through Big Brother Records.'
  },
  {
    id: '2109614',
    title: 'A Rush of Blood to the Head',
    artist: 'Coldplay',
    album: 'Pop-Rock (2002)',
    genre: 'Pop-Rock',
    year: '2002',
    coverImg: 'https://r2.theaudiodb.com/images/media/album/thumb/vsusvs1521243711.jpg',
    coverBg: '#FFE082',
    description: 'A Rush of Blood to the Head is the second studio album by British alternative rock band Coldplay, released in August 2002.'
  },
  {
    id: '2111763',
    title: 'Plastic Beach',
    artist: 'Gorillaz',
    album: 'Alternative Rock (2010)',
    genre: 'Alternative Rock',
    year: '2010',
    coverImg: 'https://r2.theaudiodb.com/images/media/album/thumb/qw3spr1606728409.jpg',
    coverBg: '#FFCCD5',
    description: 'Plastic Beach is the third studio album by British virtual band Gorillaz, released in March 2010 on Parlophone and Virgin Records.'
  },
  {
    id: '2112342',
    title: 'Discovery',
    artist: 'Daft Punk',
    album: 'Electronic (2001)',
    genre: 'Electronic',
    year: '2001',
    coverImg: 'https://r2.theaudiodb.com/images/media/album/thumb/discovery-4e33d0263f458.jpg',
    coverBg: '#C3E8DD',
    description: 'Discovery is the second studio album by French electronic music duo Daft Punk, released in March 2001.'
  }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [library, setLibrary] = useState([]);

  const apiUrl = searchTerm.trim() !== '' 
    ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(searchTerm.trim())}`
    : null;

  const { data, loading, error, refetch } = useFetch(apiUrl);

  let searchResults = [];

  if (searchTerm.trim() === '') {
    searchResults = defaultCatalog;
  } else if (data && data.album && Array.isArray(data.album)) {
    searchResults = data.album.map((albumItem) => ({
      id: albumItem.idAlbum,
      title: albumItem.strAlbum,
      artist: albumItem.strArtist,
      album: `${albumItem.strGenre || 'Álbum'} (${albumItem.intYearReleased || 'N/A'})`,
      genre: albumItem.strGenre || 'Música',
      year: albumItem.intYearReleased || 'N/A',
      coverImg: albumItem.strAlbumThumb,
      coverBg: '#E2D9F3',
      description: albumItem.strDescriptionES || albumItem.strDescriptionEN || 'Sin reseña disponible.'
    }));
  } else {
    searchResults = [];
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

  const handleReset = () => {
    setSearchTerm('');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home
                  searchResults={searchResults}
                  onAddSong={handleAddSong}
                  library={library}
                  loading={loading && searchTerm.trim() !== ''}
                  error={error}
                  onRetry={refetch}
                  onSearch={handleSearch}
                  onReset={handleReset}
                  currentArtist={searchTerm.trim() !== '' ? searchTerm : 'Menú Principal'}
                />
              } 
            />
            <Route path="/song/:id" element={<SongDetail />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
import React from 'react';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResults/SearchResults';
import Library from '../components/Library/Library';
import './Home.css';

const Home = ({ 
  searchResults, 
  onAddSong, 
  library, 
  loading, 
  error, 
  onRetry, 
  onSearch, 
  onReset,
  currentArtist 
}) => {
  return (
    <div className="home-container">
      <Header onSearch={onSearch} onReset={onReset} />
      <main className="spindle-main-grid">
        <SearchResults
          songs={searchResults}
          onAddSong={onAddSong}
          librarySongs={library}
          loading={loading}
          error={error}
          onRetry={onRetry}
          currentArtist={currentArtist}
        />
        <Library librarySongs={library} />
      </main>
    </div>
  );
};

export default Home;
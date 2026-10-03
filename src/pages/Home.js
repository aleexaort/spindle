import React from 'react';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResults/SearchResults';
import Library from '../components/Library/Library';
import { HomeContainer, MainGrid } from './Home.styles';

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
    <HomeContainer>
      <Header onSearch={onSearch} onReset={onReset} />
      <MainGrid>
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
      </MainGrid>
    </HomeContainer>
  );
};

export default Home;
import React from 'react';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResults/SearchResults';
import Library from '../components/Library/Library';
import {
  HomeContainer,
  MainLayout,
  LeftColumn,
  RightColumn
} from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <MainLayout>
        <LeftColumn>
          <SearchResults />
        </LeftColumn>
        <RightColumn>
          <Library />
        </RightColumn>
      </MainLayout>
    </HomeContainer>
  );
};

export default Home;
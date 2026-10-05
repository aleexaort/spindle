import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
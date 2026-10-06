import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../redux/store';

const mockTheme = {
  colors: {
    bgApp: '#ffffff',
    inputBg: '#f0f0f0',
    primary: '#000000',
    secondary: '#cccccc',
    text: '#000000',
    border: '#e0e0e0',
  },
  fonts: {
    main: 'sans-serif',
    secondary: 'sans-serif',
  },
  radii: {
    pill: '9999px',
    card: '8px',
  },
};

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mockTheme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
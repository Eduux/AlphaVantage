import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Routes from './routes';
import Header from './components/Header';
import { ContentWrapper } from './components/Header/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContentWrapper>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ContentWrapper>
    </ThemeProvider>
  );
}

export default App;

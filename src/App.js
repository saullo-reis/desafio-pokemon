
import Header from './components/header/header'
import Footer from './components/footer/footer'
import AppRoutes from './components/main/route/route'
import { ThemeProvider } from "./contexts/theme-context"
import { createGlobalStyle } from "styled-components";
import font from './assets/font/MilkyNice.ttf'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'pokemon-font';
    src: url(${font}) FORMAT('truetype');
  } 

  * {
  font-family: 'pokemon-font', sans-serif;
  padding: 0;
  margin: 0;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1,h3{
    letter-spacing: 2px;
  }

`

export default App;

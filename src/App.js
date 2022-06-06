import "./App.css";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import AppRoutes from './components/main/route/route'
import { ThemeProvider } from "./contexts/theme-context"

function App() {
  return (
    <ThemeProvider>
      <Header />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

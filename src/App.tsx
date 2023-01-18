import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/AppBarResponsive';
import Footer from './components/Footer';
import ConvertBox from './containers/ConvertBox';
import ExchangeRates from './containers/ExchangeRates';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <main>
        <Container maxWidth="xl">
          <ConvertBox />
          <ExchangeRates />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

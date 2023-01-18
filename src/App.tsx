import Container from '@mui/material/Container';
import AppBarResponsive from './components/AppBarResponsive';
import Footer from './components/Footer';
import ConvertBox from './containers/ConvertBox';
import ExchangeRates from './containers/ExchangeRates';

function App() {
  return (
    <div className="App">
      <AppBarResponsive />
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

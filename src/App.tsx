import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/AppBarResponsive';
import Footer from './components/Footer';
import ConvertBox from './containers/ConvertBox';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <main>
        <Container maxWidth="xl">
          <ConvertBox />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

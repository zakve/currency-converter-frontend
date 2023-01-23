import { Route, Routes } from 'react-router-dom';

import AppBarResponsive from './components/AppBarResponsive';
import Footer from './components/Footer';
import ConvertPage from './pages/ConvertPage'
import StatisticsPage from './pages/StatisticsPage'
import NotFoundPage from './pages/NotFoundPage'

const Layout = () => {
  return (
    <>
      <AppBarResponsive />
      <main>
        <Routes>
          <Route path="/" element={<ConvertPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;

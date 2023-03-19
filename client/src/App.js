import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import NavBar from './components/views/NavBar/NavBar';
import NotFound from './components/pages/NotFound/NotFound'

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import Navbar from './components/views/Navbar/Navbar';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
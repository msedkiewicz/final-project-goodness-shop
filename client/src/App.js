import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import Order from './components/features/Order/Order';
// import ProductPage from './components/features/ProductPage/ProductPage';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import NavBar from './components/views/NavBar/NavBar';
import NotFound from './components/pages/NotFound/NotFound';
// import Cart from './components/views/cart/Cart';
// import Login from './components/views/Login/Login';
// import Logout from './components/views/Logout/Logout';
// import Register from './components/views/Register/Register';
// import Summary from './components/views/Summary/Summary';
import { addCart } from './redux/cartRedux';

function App() {
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem('cart')) || 0,
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || 0,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length > 0) {
      cartData.map((i) => {
        dispatch(addCart(i));
      });
    }
  }, [cartData]);

  return (
    <Container>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/loginUser" element={<Login />} />
          <Route path="/registerUser" element={<Register />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/logoutUser" element={<Logout />} /> */}
        </Routes>
        <Footer />
      </main>
    </Container>
  );
}

export default App;

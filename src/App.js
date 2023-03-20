import { useState } from 'react';
import ProductListContainer from './containers/ProductListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductListContainer handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { generatedProducts } from '../data/GenerateData';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import './styling.css';

const ProductListContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCartSize(updatedCart.length);
  };

  const filteredProducts = generatedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    setCartSize(cart.length);
  }, [cart]);

  return (
    <div className="container">
      <Header onSearch={handleSearch} cartSize={cartSize} />
      <div className="product-list">
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={10} sm={6} md={4} key={product.id}>
              <ProductCard
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductListContainer;

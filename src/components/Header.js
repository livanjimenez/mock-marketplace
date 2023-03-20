import { useState } from 'react';
import { TextField, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'black',
    fontSize: '20px',
    padding: '10px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const CartSize = styled(Button)({
  fontSize: '20px',
  textDecoration: 'none',
});

const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
});

const Header = ({ onSearch, cartSize }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <HeaderContainer>
      <SearchField
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleSearch}
        variant="filled"
      />
      <Link to="/cart">
        <CartSize variant="contained" color="primary">
          Go to Cart ({cartSize})
        </CartSize>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

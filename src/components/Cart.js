import { Card, CardContent, Typography } from '@mui/material';

const Cart = ({ cartItems }) => {
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <Card key={item.id} sx={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="primary">
            {item.price}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        /Cart page
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" component="div">
          Work in progress
        </Typography>
      ) : (
        renderCartItems()
      )}
    </div>
  );
};

export default Cart;

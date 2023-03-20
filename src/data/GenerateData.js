import { faker } from '@faker-js/faker';

export const generatedProducts = (() => {
  const products = [];

  for (let i = 0; i < 10; i++) {
    const product = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(400, 400, 'product'),
    };
    products.push(product);
  }

  return products;
})();

// src/stories/ProductCard.stories.js
import React from 'react';
import ProductCard from '../components/ProductCard';

export default {
  title: 'Ecommerce/ProductCard',
  component: ProductCard,
  argTypes: {
    product: { control: 'object' },
    onAddToCart: { action: 'added to cart' },
  },
};

const Template = (args) => <ProductCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  product: {
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 29.99,
    image: 'https://bluecast.tech/wp-content/uploads/2019/07/e-commerce_1.jpg',
  },
};

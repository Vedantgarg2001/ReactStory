import React from 'react';
import ProductList from '../components/ProductList';

export default {
  title: 'Ecommerce/ProductList',
  component: ProductList,
  argTypes: {
    products: { control: 'array' },
    onAddToCart: { action: 'added to cart' },
  },
};

const Template = (args) => <ProductList {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = {
  products: [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 29.99, image: 'https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 39.99, image: 'https://www.solutions4ecommerce.com/wp-content/uploads/2018/01/ECommerce_Illustration_.png' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 49.99, image: 'https://www.gforgames.com/wp-content/uploads/2022/02/Ecommerce-Products.jpg' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 59.99, image: 'https://inc42.com/wp-content/uploads/2020/01/Untitled-design-2020-01-08T232155.917.jpg' },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 69.99, image: 'https://img.freepik.com/premium-photo/applications-symbols-shopping-basket-3d-illustration_771335-24836.jpg' },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 79.99, image: 'https://catapultrevenue.com/app/uploads/2020/05/eCommerce-products.jpg' },
    { id: 7, name: 'Product 7', description: 'Description of Product 7', price: 89.99, image: 'https://wallpaperaccess.com/full/2593068.jpg' },
    { id: 8, name: 'Product 8', description: 'Description of Product 8', price: 99.99, image: 'https://th.bing.com/th/id/OIP.tNzhvGRwyJqirlfAJxWC_wHaEk?rs=1&pid=ImgDetMain' },
    { id: 9, name: 'Product 9', description: 'Description of Product 9', price: 109.99, image: 'https://th.bing.com/th/id/R.82ba779360b50f5c461e8592fb7473d1?rik=RcI3k0vhEbR%2fpg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fe-commerce-png-sell-your-products-and-services-online-1000.png&ehk=LZ2GD%2fGQ98UUOsXo6cKf4wz84A1wac5zM6LprYBb79A%3d&risl=&pid=ImgRaw&r=0' },
    { id: 10, name: 'Product 10', description: 'Description of Product 10', price: 119.99, image: 'https://i.pinimg.com/originals/96/30/06/963006d63128a618de8dd5a173554c69.jpg' },
  ],
};

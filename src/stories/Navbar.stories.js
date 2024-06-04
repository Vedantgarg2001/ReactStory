
import React from 'react';
import Navbar from '../components/Navbar';

export default {
  title: 'Ecommerce/Navbar',
  component: Navbar,
  argTypes: {
    logo: { control: 'text' },
    links: {
      control: 'object',
      defaultValue: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#products', label: 'Products' },
        { href: '#contact', label: 'Contact Us' },
      ],
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://i.pinimg.com/originals/f4/cf/ec/f4cfec4f3b4bbf24798b26aa4a5508f2.png',
  links: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact Us' },
  ],
};

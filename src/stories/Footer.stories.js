import React from 'react';
import Footer from '../components/Footer';

export default {
  title: 'Ecommerce/Footer',
  component: Footer,
  argTypes: {
    text: { control: 'text' },
    links: {
      control: 'object',
      defaultValue: [
        { href: '#privacy', label: 'Privacy Policy' },
        { href: '#terms', label: 'Terms of Service' },
        { href: '#contact', label: 'Contact Us' },
      ],
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '© 2024 My E-Commerce Site. All rights reserved.',
  links: [
    { href: '#privacy', label: 'Privacy Policy' },
    { href: '#terms', label: 'Terms of Service' },
    { href: '#contact', label: 'Contact Us' },
  ],
};

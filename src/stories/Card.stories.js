import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

export default {
  title: 'Ecommerce/Card',
  component: Card,
  argTypes: {
    email: { control: 'text' },
    password: { control: 'text' },
    onEmailChange: { action: 'email changed' },
    onPasswordChange: { action: 'password changed' },
    onLogin: { action: 'login clicked' },
  },
};

const Template = (args) => {
  const [email, setEmail] = useState(args.email);
  const [password, setPassword] = useState(args.password);

  useEffect(() => {
    setEmail(args.email);
  }, [args.email]);

  useEffect(() => {
    setPassword(args.password);
  }, [args.password]);

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    args.onEmailChange(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    args.onPasswordChange(newPassword);
  };

  const handleLogin = () => {
    args.onLogin(email, password);
  };

  return (
    <Card
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  email: 'example@example.com',
  password: 'password',
};

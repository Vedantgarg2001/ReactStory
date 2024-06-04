import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ email, password, onEmailChange, onPasswordChange, onLogin }) => {
  return (
    <div className="card">
      <h3 className="card-title">Login</h3>
      <div className="card-content">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
        <button onClick={() => onLogin(email, password)}>Login</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Card;

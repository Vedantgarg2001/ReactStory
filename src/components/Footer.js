import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ text, links }) => {
  return (
    <footer className="footer">
      <div className="footer-text">{text}</div>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;

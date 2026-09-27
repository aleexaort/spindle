import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="spindle-navbar">
      <div className="spindle-logo-container">
        {/* Logo SVG de Spindle */}
        <div className="logo-circle">
          <svg viewBox="0 0 100 100" className="vinyl-svg">
            <circle cx="50" cy="50" r="32" fill="none" stroke="#FFFFFF" strokeWidth="6" />
            <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
            <path d="M 32 38 A 22 22 0 0 1 42 28" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            <path d="M 68 62 A 22 22 0 0 1 58 72" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="brand-text-wrapper">
          <h1 className="spindle-brand-text">Spindle</h1>
          <span className="spindle-slogan">Dale vuelta a tu música</span>
        </div>
      </div>

      <div className="spindle-search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="¿Qué quieres escuchar hoy?" disabled />
      </div>

      <div className="spindle-user-profile">
        <div className="avatar-pill">A</div>
      </div>
    </header>
  );
};

export default Header;
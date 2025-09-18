import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/sysnova-logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="SysNova Solutions Logo" className="logo" />
        <span className="company-name">SysNova Solutions</span>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Inicio</a>
        <a href="#services" onClick={closeMenu}>Servicios</a>
        <a href="#why-us" onClick={closeMenu}>Por Qué Elegirnos</a>
        <a href="#process" onClick={closeMenu}>Proceso</a>
        <a href="#about" onClick={closeMenu}>Quiénes Somos</a>
        <a href="#contact" onClick={closeMenu}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
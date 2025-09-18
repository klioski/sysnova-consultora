import React from 'react';
import './Header.css'; // Archivo de estilos para el Header
import logo from '../assets/sysnova-logo.png'; // Asegúrate de guardar tu logo aquí


function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="SysNova Solutions Logo" className="logo" />
        <span className="company-name">SysNova Solutions</span>
      </div>
      <nav className="navbar">
        <a href="#home">Inicio</a>
        <a href="#about">Quiénes Somos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
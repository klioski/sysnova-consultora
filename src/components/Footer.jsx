import React from 'react';
import './Footer.css'; // Archivo de estilos para Footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SysNova Solutions. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
import React from 'react';
import './Contact.css'; // Archivo de estilos para Contact

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contáctanos</h2>
        <p>¿Listo para llevar tu negocio al siguiente nivel? ¡Hablemos de tu proyecto!</p>
        <form className="contact-form">
          <input type="text" placeholder="Tu Nombre" required />
          <input type="email" placeholder="Tu Correo Electrónico" required />
          <textarea placeholder="Cuéntanos sobre tu proyecto..." rows="5" required></textarea>
          <button type="submit" className="btn-primary">Enviar Mensaje</button>
        </form>
        <p className="contact-info">O escríbenos a: <a href="mailto:info@sysnovasolutions.com">info@sysnovasolutions.com</a></p>
        <p className="contact-info">Llámanos: +52 55 6559 2896</p>
      </div>
    </section>
  );
}

export default Contact;
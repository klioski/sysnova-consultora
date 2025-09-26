import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Archivo de estilos para Contact

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submission

    // Replace these values with your own from EmailJS
    const serviceID = 'service_d75t0cd';
    const templateID = 'template_axibana';
    const userID = '8r-oD-L2aiymcgxtn'; // This is your User ID or Public Key

    emailjs.sendForm(serviceID, templateID, form.current, userID)
        .then((result) => {
          console.log(result.text);
          alert('¡Gracias! Tu mensaje ha sido enviado con éxito.');
          e.target.reset(); // Clears the form fields after successful submission
        }, (error) => {
          console.log(error.text);
          alert('Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
  };

  return (
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Contáctanos</h2>
          <p>¿Listo para llevar tu negocio al siguiente nivel? ¡Hablemos de tu proyecto!</p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Tu Nombre" required />
            <input type="email" name="user_email" placeholder="Tu Correo Electrónico" required />
            <textarea name="message" placeholder="Cuéntanos sobre tu proyecto..." rows="5" required></textarea>
            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </form>
          <p className="contact-info">O escríbenos a: <a href="mailto:sysnovasolutions@gmail.com">sysnovasolutions@gmail.com</a></p>
          <p className="contact-info">Llámanos: +52 55 6559 2896</p>
        </div>
      </section>
  );
}

export default Contact;
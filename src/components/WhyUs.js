import React from 'react';
import './WhyUs.css'; // Archivo de estilos para esta sección

function WhyUs() {
  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <h2>Por Qué Elegir a SysNova Solutions</h2>
        <p className="intro-text">
          Somos más que un equipo de desarrolladores; somos tus socios tecnológicos. Nuestro compromiso es tu éxito.
        </p>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Enfoque en el Cliente</h3>
            <p>
              Nos obsesiona entender tus problemas de negocio para construir soluciones que realmente funcionen.
            </p>
          </div>
          <div className="benefit-item">
            <div className="icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Tecnología de Vanguardia</h3>
            <p>
              Utilizamos tecnologías robustas como Java y React para asegurar sistemas escalables, seguros y de alto rendimiento.
            </p>
          </div>
          <div className="benefit-item">
            <div className="icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Comunicación Transparente</h3>
            <p>
              Te mantenemos informado en cada etapa del proyecto. No hay sorpresas, solo resultados.
            </p>
          </div>
          <div className="benefit-item">
            <div className="icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>Soporte Dedicado</h3>
            <p>
              Nuestro trabajo no termina con la entrega. Ofrecemos un soporte post-venta para garantizar el éxito a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
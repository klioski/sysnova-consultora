import React from 'react';
import './Services.css'; // Archivo de estilos para la sección de servicios

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Nuestros Servicios: Tu Solución, a la Medida</h2>
        <p className="intro-text">
          No solo creamos software, resolvemos problemas. Ofrecemos una gama de servicios diseñados para optimizar tu negocio y prepararlo para el futuro.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-search-plus"></i> {/* Icono de Consultoría */}
            </div>
            <h3>Consultoría en Digitalización</h3>
            <p>
              Analizamos tus procesos de negocio para identificar oportunidades de mejora y automatización. Te ayudamos a trazar una estrategia tecnológica clara y efectiva.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              <i className="fas fa-laptop-code"></i> {/* Icono de Desarrollo */}
            </div>
            <h3>Desarrollo de Software a la Medida</h3>
            <p>
              Construimos sistemas personalizados desde cero, como plataformas de ventas, gestión de inventarios o sistemas de control de cuadrillas, que se adaptan perfectamente a tu operación.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">
              <i className="fas fa-tools"></i> {/* Icono de Soporte */}
            </div>
            <h3>Soporte y Mantenimiento</h3>
            <p>
              Garantizamos que tu software funcione sin problemas. Ofrecemos soporte técnico, actualizaciones y mantenimiento continuo para asegurar el rendimiento a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
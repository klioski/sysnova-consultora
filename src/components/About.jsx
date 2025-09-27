import React from 'react';
import './About.css'; // Archivo de estilos para About

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>¿Quiénes Somos?</h2>
        <p>En SysNova Solutions, nos dedicamos a construir soluciones de software a la medida para pequeñas y medianas empresas. Creemos que la tecnología es la herramienta más poderosa para optimizar las operaciones y desbloquear el potencial de crecimiento de tu negocio. No vendemos productos enlatados, creamos sistemas que resuelven tus problemas únicos, permitiéndote ser más eficiente, rentable y competitivo.</p>
        
        <h3>Nuestra Misión y Visión</h3>
        <ul>
          <li><strong>Misión</strong>: Ser el socio tecnológico de confianza de las empresas, ofreciendo soluciones de software personalizadas que optimicen sus operaciones, aumenten su eficiencia y les ayuden a alcanzar sus metas de negocio.</li>
          <li><strong>Visión</strong>: Convertirnos en la consultora de software de referencia en el mercado, reconocida por nuestra capacidad para innovar y por el impacto real que nuestras soluciones generan en el crecimiento y la sostenibilidad de las empresas.</li>
        </ul>

        <h3>Nuestra Estrategia</h3>
        <p>Nuestra estrategia se basa en tres pilares clave:</p>
        <ol>
          <li><strong>Enfoque en el Problema, No en el Producto</strong>: Diseñamos software que ataca directamente tus puntos débiles.</li>
          <li><strong>Soluciones Asequibles y Escalables</strong>: Comenzamos con un Producto Mínimo Viable (MVP) y crecemos contigo.</li>
          <li><strong>Construcción de Relaciones a Largo Plazo</strong>: Ofrecemos soporte continuo para asegurar tu éxito.</li>
        </ol>
      </div>
    </section>
  );
}

export default About;
import React from 'react';
import './Process.css'; // Archivo de estilos para la sección de proceso

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2>Nuestro Proceso de Trabajo</h2>
        <p className="intro-text">
          Hemos optimizado nuestro proceso para asegurar que el desarrollo sea eficiente, transparente y centrado en tus necesidades.
        </p>
        <div className="process-flow">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Análisis y Diagnóstico</h3>
            <p>
              Comenzamos conociendo tu negocio, sus desafíos y sus metas. Es el cimiento de una solución exitosa.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Propuesta y Planificación</h3>
            <p>
              Te presentamos un plan claro, un cronograma realista y una propuesta de MVP que ataca tus problemas más urgentes.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Desarrollo y Pruebas</h3>
            <p>
              Construimos el software en etapas. Te involucramos en el proceso para que veas el progreso y puedas dar feedback.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Entrega y Capacitación</h3>
            <p>
              Lanzamos el sistema y capacitamos a tu equipo para que puedan aprovecharlo al máximo desde el primer día.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Soporte y Crecimiento</h3>
            <p>
              Nuestra relación no termina con la entrega. Ofrecemos soporte continuo y ayudamos a planear el futuro del software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
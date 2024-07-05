import React from 'react';
import styles from "./interest.module.css";

const Interest = () => {
  return (
    <div name='skills' className={styles.container}>
      {/* Container */}
      <div className={styles.innerContainer}>
        <div>
          <p className={styles.sectionTitle}>Intereses</p>
          <p className={styles.sectionDescription}>// Descubre mis intereses profesionales y personales</p>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Profesionales</h3>
          <ul className={styles.list}>
            <li>Desarrollo Web Frontend con React, Next.js, Redux, JavaScript, HTML, y CSS</li>
            <li>Desarrollo Web Backend con Node.js, Express, y PostgreSQL</li>
            <li>Exploración de nuevas tecnologías y herramientas</li>
            <li>Creación de soluciones y mejora de la experiencia del usuario</li>
            <li>Crecimiento profesional para que mi carrera evolucione favorablemente</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Personales</h3>
          <ul className={styles.list}>
            <li>Practica de deportes al aire libre y gimnasio</li>
            <li>Viajar y conocer nuevos lugares y culturas</li>
            <li>Organizar asados con amigos</li>
            <li>Asistir a eventos sociales y tecnológicos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Interest;
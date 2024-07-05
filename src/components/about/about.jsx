import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div name="about" className={styles.aboutContent}>
        <div className={`${styles.gridContainer} max-w-[1000px] w-full grid grid-cols-2 gap-8`}>
          <div className={`${styles.textRight} sm:text-right pb-8 pl-4`}>
            <p className={`${styles.title} text-4xl font-bold inline border-b-4 border-pink-600`}>
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div className={`${styles.gridContainer} max-w-[1000px] w-full grid grid-cols-2 gap-8`}>
          <div className={`${styles.textRight} sm:text-right text-4xl font-bold`}>
            <p>
              Descubre más sobre mí. Aquí podrás explorar mi pasión por el
              desarrollo web y la tecnología, reflejada en mis proyectos y
              trabajo como desarrollador full stack.
            </p>
          </div>
          <div>
            <p className={styles.parrafo}>
              Soy un apasionado desarrollador full stack con un año de
              experiencia en el mundo del desarrollo web. Me encanta explorar
              tanto el front-end como el back-end, siempre buscando nuevos
              desafíos y oportunidades de crecimiento. Fuera del código,
              disfruto de la vida al aire libre: practicar deportes, viajar con
              mi novia y organizar asados con amigos son algunas de mis
              actividades favoritas. Soy una persona proactiva y resiliente,
              motivada por seguir aprendiendo y mejorando mis habilidades día a
              día. Creo firmemente en el poder transformador de la tecnología y
              estoy emocionado por contribuir a su evolución. Para mí, encontrar
              el equilibrio entre el trabajo y el disfrute de la vida es clave,
              siempre buscando aprender algo nuevo en cada experiencia que
              enfrento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import styles from './home.module.css';
import profile from "@/assets/images/IMG_3378.jpg";
import Image from 'next/image';

const HomePage = () => {
    return (
      <div>
        <div name="home" className={styles.container}>
          {/* Main Container */}
          <div className={styles.mainContainer}>
            {/* Inner Container */}
            <div className={styles.innerContainer}>
              <p className={styles.textPink}>Hola, mi nombre es</p>
              <h1 className={styles.textLarge}>
                Juan Justo Müller
              </h1>
              <h2 className={styles.textXLarge}>
                y Soy Full Stack Developer
              </h2>
              <p className={styles.paragraph}>
                Soy Full Stack Developer, tengo experiencia en la creación de
                aplicaciones web dinámicas y eficientes. Busco soluciones
                innovadoras que mejoren la experiencia del usuario y optimicen el
                rendimiento. Con experiencia en gran variedad de tecnologías, estoy
                ansioso por desafíos que me permitan seguir aprendiendo y mejorando
                mis habilidades.
              </p>
            </div>
  
            {/* Image Container */}
            <div className={styles.imageContainer}>
              <Image src={profile} alt="profile"  className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;

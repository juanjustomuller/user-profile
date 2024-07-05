import React from 'react' ;
import styles from "./contact.module.css";

const Contact = () => {

  // const handleClick = () => {
  //   alert("Mensaje enviado con exito")
  // }

  return (
    <div>
      <div name="contact" className={styles.contactContainer}>
        <form
          className={styles.formContainer}
          
        >
          <div className={styles.formHeader}>
            <p className={styles.title}>Contacto</p>
            <p className={styles.description}>
              // Envía el formulario a continuación o envíame un correo
              electrónico - juancitomuller@gmail.com
            </p>
          </div>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Nombre"
            name="name"
          />
          <input
            className={styles.inputField}
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className={styles.inputField}
            rows="10"
            placeholder="Mensaje"
            name="message"
          />
          <button 
          className={styles.button}
          type="button"
          //onClick={handleClick}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

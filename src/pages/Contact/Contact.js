import styles from './Contact.module.css';
import storeFront from '../../images/photos/storefront.jpg'

function Contact() {
  return (
    <div className={styles.window}>
      <div className={styles['centered-content']}>
        <h1 className={styles.contactHeader}>Contact Us</h1>
        <div className={`${styles['window-content']} ${styles['centered-content']}`}>
          <p>Store Hours</p>
          <p>Tue-Fri 9am-6pm </p>
          <p>Sat 9am-3pm</p>
        </div>
        <img src={storeFront} alt="storeFront" className={styles['contact-image']} />
      </div>
      <div className={`${styles['window-content']} ${styles['centered-content']} ${styles['contact-info']}`}>
        <p>Travis Ayers</p>
        <p>400 Taylor Avenue</p>
        <p>41073 Bellevue, Kentucky</p>
        <p>bellevuebarbershop.ky@gmail.com</p>
        <p>(859) 360-1911</p>
      </div>
    </div>
  );
}

export default Contact;
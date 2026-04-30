import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our experts for professional immigration advice.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <span className={styles.subHeading}>Get In Touch</span>
              <h2>How Can We <span>Help You?</span></h2>
              <p>Have questions about your visa application or need to book a consultation? Reach out to us through any of the following channels.</p>
              
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <span className={styles.icon}>📍</span>
                  <div>
                    <h4>Our Location</h4>
                    <p>Unit UF-75 1st Floor Cantonment Shoping Mall Rashid Minhas Road Faisal Cantonment Karachi</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <h4>Phone Number</h4>
                    <p>+92 123 4567890</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <span className={styles.icon}>✉️</span>
                  <div>
                    <h4>Email Address</h4>
                    <p>info@starwayimmigration.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        {/* Placeholder for Google Map */}
        <div className={styles.mapPlaceholder}>
          <p>Interactive Map Placeholder</p>
        </div>
      </section>
    </div>
  );
}

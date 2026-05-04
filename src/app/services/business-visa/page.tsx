import styles from '../page.module.css';
import Link from 'next/link';

export default function BusinessVisaPage() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Business Visa</h1>
          <p>Professional assistance for entrepreneurs and professionals expanding their horizons.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Expand Your <span>Business Globally</span></h2>
              <p>
                In today's global economy, business travel is essential for growth. Whether you're attending a conference, meeting partners, or exploring new markets, we provide the support you need to obtain your business visa quickly.
              </p>
              <p>
                Our consultants understand the time-sensitive nature of business travel and work efficiently to ensure your application is processed without delays.
              </p>
              
              <h3>Our Business Visa Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Assistance with invitation letters and business sponsorship</li>
                <li>✓ Professional review of company and personal documents</li>
                <li>✓ Priority processing for urgent business travel</li>
                <li>✓ Guidance on long-term multiple-entry business visas</li>
                <li>✓ Support for corporate clients and group bookings</li>
              </ul>

              <h3>Corporate Excellence</h3>
              <p>
                We have helped hundreds of entrepreneurs and corporate professionals successfully secure visas for major global business hubs. Our attention to detail ensures that all corporate compliance and documentation requirements are met.
              </p>
            </div>
            
            <div className={styles.ctaBox}>
              <h3>Business Consultation</h3>
              <p>Planning a business trip? Contact our specialized corporate visa desk for expert help.</p>
              <Link href="/contact" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

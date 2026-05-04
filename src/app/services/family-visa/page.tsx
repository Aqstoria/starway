import styles from '../page.module.css';
import Link from 'next/link';

export default function FamilyVisaPage() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Family Visa</h1>
          <p>Bringing families together with dedicated residency and spouse visa services.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Reunite with Your <span>Loved Ones</span></h2>
              <p>
                We believe that families should be together. Our family and spouse visa services are designed to navigate the complexities of immigration law to reunite you with your family members abroad.
              </p>
              <p>
                From dependent visas to permanent settlement for families, we provide compassionate and professional guidance every step of the way.
              </p>
              
              <h3>Our Family Visa Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Spouse and fiancé visa applications</li>
                <li>✓ Child and dependent relative visa support</li>
                <li>✓ Family settlement and PR pathways</li>
                <li>✓ Marriage and relationship documentation advice</li>
                <li>✓ Detailed financial requirement assessment</li>
              </ul>

              <h3>Compassionate Guidance</h3>
              <p>
                Family visa applications can be emotionally challenging and legally complex. Our team provides the empathy and expertise needed to ensure your family's future is secure in your new home.
              </p>
            </div>
            
            <div className={styles.ctaBox}>
              <h3>Family Consultation</h3>
              <p>Want to bring your family abroad? Speak to our family immigration specialists today.</p>
              <Link href="/contact" className="btn-primary">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import styles from '../page.module.css';
import Link from 'next/link';

export default function TouristVisaPage() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Tourist Visa</h1>
          <p>Seamless visa processing for your next vacation or family visit anywhere in the world.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Explore the World with <span>Ease and Confidence</span></h2>
              <p>
                Whether you're planning a dream vacation, visiting family and friends, or exploring new cultures, Starway Immigration makes the tourist visa process simple and stress-free.
              </p>
              <p>
                We handle visas for all major destinations including the Schengen area (Europe), UK, USA, Canada, Australia, and many more.
              </p>
              
              <h3>Our Tourist Visa Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Personalized visa strategy based on your travel history</li>
                <li>✓ Complete documentation checklist and verification</li>
                <li>✓ Professional assistance with online and offline application forms</li>
                <li>✓ Flight and hotel reservation guidance</li>
                <li>✓ Travel insurance advice</li>
              </ul>

              <h3>Why Choose Us?</h3>
              <p>
                Our team has extensive experience with visit visa requirements for various countries. we ensure that your application is strong and meets all the criteria set by the respective embassies, maximizing your chances of approval.
              </p>
            </div>
            
            <div className={styles.ctaBox}>
              <h3>Plan Your Trip</h3>
              <p>Want to check your eligibility for a tourist visa? Get in touch with our experts today.</p>
              <Link href="/contact" className="btn-primary">Inquire Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

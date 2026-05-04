import styles from '../page.module.css';
import Link from 'next/link';

export default function StudentVisaPage() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Student Visa</h1>
          <p>Expert guidance for students looking to study abroad in world-class universities.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Pursue Your <span>Academic Dreams</span> Worldwide</h2>
              <p>
                Studying abroad is a life-changing experience that opens up a world of opportunities. At Starway Immigration, we help students navigate the complex process of obtaining a student visa for their desired destination.
              </p>
              <p>
                From choosing the right course and university to preparing your visa application, our expert consultants provide end-to-end support to ensure your success.
              </p>
              
              <h3>Our Student Visa Services Include:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Comprehensive university and course selection guidance</li>
                <li>✓ Professional assistance with admission applications</li>
                <li>✓ Detailed documentation and financial proof preparation</li>
                <li>✓ Mock visa interviews and coaching</li>
                <li>✓ Post-visa support including travel and accommodation advice</li>
              </ul>

              <h3>Why Choose Starway for Your Student Visa?</h3>
              <p>
                We have a high success rate and maintain strong partnerships with universities across the UK, USA, Canada, Australia, and Europe. Our team stays updated with the latest immigration rules and requirements to provide you with accurate advice.
              </p>
            </div>
            
            <div className={styles.ctaBox}>
              <h3>Get Started Today</h3>
              <p>Ready to apply for your student visa? Contact our experts for a free consultation.</p>
              <Link href="/contact" className="btn-primary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import styles from '../page.module.css';
import Link from 'next/link';

export default function PRServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>PR Services</h1>
          <p>Long-term pathways for permanent residency and citizenship in top countries.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Your Path to <span>Permanent Residency</span></h2>
              <p>
                Permanent residency is the ultimate goal for many immigrants. It provides security, access to benefits, and a clear path to citizenship. At Starway Immigration, we specialize in high-success PR programs.
              </p>
              <p>
                Whether you're looking at Canada's Express Entry, Australia's Skilled Independent visa, or European residency-by-investment, we have the expertise to guide you.
              </p>
              
              <h3>Our PR & Citizenship Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Eligibility assessment and points calculation</li>
                <li>✓ Invitation to Apply (ITA) preparation</li>
                <li>✓ Comprehensive documentation and case filing</li>
                <li>✓ Residency-by-investment and business PR programs</li>
                <li>✓ Citizenship application and naturalization support</li>
              </ul>

              <h3>Long-Term Success</h3>
              <p>
                We don't just help you get a visa; we help you build a life. Our PR services are focused on long-term success and legal compliance, ensuring that you and your family have a secure future in your chosen country.
              </p>
            </div>
            
            <div className={styles.ctaBox}>
              <h3>PR Eligibility Check</h3>
              <p>Want to know if you qualify for Permanent Residency? Get a detailed assessment today.</p>
              <Link href="/contact" className="btn-primary">Free Assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

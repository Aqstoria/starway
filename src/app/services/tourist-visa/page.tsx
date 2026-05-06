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
                We handle visitor and holiday applications for leading travel hubs, with specialized, end-to-end documentation processing.
              </p>
              
              <h3>Our Tourist Visa Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Personalized visa strategy based on your travel history</li>
                <li>✓ Complete documentation checklist and verification</li>
                <li>✓ Professional assistance with online and offline application forms</li>
                <li>✓ Flight and hotel reservation guidance</li>
                <li>✓ Travel insurance advice</li>
              </ul>

              <h3>Key Tourist Destinations We Support:</h3>
              <p>We provide full visa preparation and file documentation services for tourist entries to:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px', marginTop: '15px', marginBottom: '30px' }}>
                {[
                  { name: 'Azerbaijan', code: 'az' },
                  { name: 'Uzbekistan', code: 'uz' },
                  { name: 'Saudi Arabia', code: 'sa' },
                  { name: 'Germany', code: 'de' },
                  { name: 'Qatar', code: 'qa' },
                  { name: 'United Kingdom', code: 'gb' },
                  { name: 'United States', code: 'us' },
                  { name: 'Canada', code: 'ca' },
                ].map((country) => (
                  <div key={country.code} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fafbfd', padding: '12px 15px', borderRadius: '8px', border: '1px solid rgba(0,33,71,0.04)', boxShadow: '0 2px 8px rgba(0,33,71,0.01)' }}>
                    <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} style={{ width: '22px', height: 'auto', borderRadius: '2px', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-color)' }}>{country.name}</span>
                  </div>
                ))}
              </div>

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

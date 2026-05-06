import styles from '../page.module.css';
import Link from 'next/link';

export default function WorkPermitPage() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Work Permit</h1>
          <p>Reliable support for skilled workers seeking career opportunities internationally.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Build Your <span>Global Career</span></h2>
              <p>
                Ready to take the next step in your professional journey? Starway Immigration specializes in helping skilled workers and professionals secure work permits for top destinations around the world.
              </p>
              <p>
                From contract validation to skilled worker registrations, we provide the technical expertise needed to successfully acquire a valid international working visa.
              </p>
              
              <h3>Our Work Permit Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Skilled Worker visa programs (Express Entry, H1-B, etc.)</li>
                <li>✓ Employer-sponsored work permit assistance</li>
                <li>✓ Intra-company transfer documentation</li>
                <li>✓ Job offer validation and contract review</li>
                <li>✓ Professional profile and resume optimization for international markets</li>
              </ul>

              <h3>Work Visa Destinations We Support:</h3>
              <p>We actively process and facilitate work permit documentation for the following economies:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px', marginTop: '15px', marginBottom: '30px' }}>
                {[
                  { name: 'Azerbaijan', code: 'az' },
                  { name: 'Uzbekistan', code: 'uz' },
                  { name: 'Saudi Arabia', code: 'sa' },
                  { name: 'Germany', code: 'de' },
                  { name: 'Qatar', code: 'qa' },
                  { name: 'Australia', code: 'au' },
                  { name: 'United States', code: 'us' },
                  { name: 'Canada', code: 'ca' },
                ].map((country) => (
                  <div key={country.code} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fafbfd', padding: '12px 15px', borderRadius: '8px', border: '1px solid rgba(0,33,71,0.04)', boxShadow: '0 2px 8px rgba(0,33,71,0.01)' }}>
                    <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} style={{ width: '22px', height: 'auto', borderRadius: '2px', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-color)' }}>{country.name}</span>
                  </div>
                ))}
              </div>

              <h3>Expert Career Support</h3>
              <p>
                Our team works closely with employers and legal partners worldwide to ensure that your work permit application is compliant and successful. We help you transition smoothly into your new international role.
              </p>
            </div>
            
            <div className={styles.ctaBox}>
              <h3>Career Consultation</h3>
              <p>Looking for work opportunities abroad? Speak to our career consultants today.</p>
              <Link href="/contact" className="btn-primary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

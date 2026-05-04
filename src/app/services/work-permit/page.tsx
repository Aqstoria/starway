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
                From job offer validation to LMIA applications and skilled worker programs, we provide the technical expertise needed to navigate the complex work visa landscape.
              </p>
              
              <h3>Our Work Permit Services:</h3>
              <ul className={styles.serviceList}>
                <li>✓ Skilled Worker visa programs (Express Entry, H1-B, etc.)</li>
                <li>✓ Employer-sponsored work permit assistance</li>
                <li>✓ Intra-company transfer documentation</li>
                <li>✓ Job offer validation and contract review</li>
                <li>✓ Professional profile and resume optimization for international markets</li>
              </ul>

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

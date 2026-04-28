import styles from './page.module.css';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { title: "Student Visa", icon: "🎓", desc: "Expert guidance for students looking to study abroad in world-class universities." },
    { title: "Tourist Visa", icon: "✈️", desc: "Seamless visa processing for your next vacation or family visit anywhere in the world." },
    { title: "Business Visa", icon: "💼", desc: "Professional assistance for entrepreneurs and professionals expanding their horizons." },
    { title: "Work Permit", icon: "🛠️", desc: "Reliable support for skilled workers seeking career opportunities internationally." },
    { title: "Family Visa", icon: "🏠", desc: "Bringing families together with dedicated residency and spouse visa services." },
    { title: "PR Services", icon: "🌏", desc: "Long-term pathways for permanent residency and citizenship in top countries." }
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive visa and immigration solutions for every need.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className={styles.serviceFeatures}>
                  <ul>
                    <li>✓ Free initial consultation</li>
                    <li>✓ Document preparation</li>
                    <li>✓ Interview coaching</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary">Enquire Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Journey?</h2>
            <p>Our experts are here to guide you every step of the way.</p>
            <Link href="/contact" className="btn-primary">Get A Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

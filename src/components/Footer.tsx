import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.column}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoStar}>STAR</span>WAY
            <span className={styles.logoSubText}>IMMIGRATION</span>
          </Link>
          <p className={styles.description}>
            Starway Immigration is a leading visa and immigration consultancy service dedicated to providing professional guidance for students, workers, and families.
          </p>
        </div>
        
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Services</h3>
          <ul className={styles.links}>
            <li><Link href="/services/student-visa">Student Visa</Link></li>
            <li><Link href="/services/tourist-visa">Tourist Visa</Link></li>
            <li><Link href="/services/business-visa">Business Visa</Link></li>
            <li><Link href="/services/family-visa">Family Visa</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Contact Info</h3>
          <ul className={styles.contactList}>
            <li>📍 123 Starway Plaza, Punjab, Pakistan</li>
            <li>📞 +92 123 4567890</li>
            <li>📧 info@starwayimmigration.com</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {currentYear} Starway Immigration. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

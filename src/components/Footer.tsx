import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, Globe } from 'lucide-react';
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
            Starway Immigration is a leading, licensed visa and immigration consultancy service dedicated to providing professional, high-success guidance for students, workers, and families.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://starwayimmigration.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul className={styles.links}>
            <li><Link href="/"><ArrowRight size={14} className={styles.linkArrow} /> Home</Link></li>
            <li><Link href="/about"><ArrowRight size={14} className={styles.linkArrow} /> About Us</Link></li>
            <li><Link href="/services"><ArrowRight size={14} className={styles.linkArrow} /> Our Services</Link></li>
            <li><Link href="/blog"><ArrowRight size={14} className={styles.linkArrow} /> Blogs & News</Link></li>
            <li><Link href="/contact"><ArrowRight size={14} className={styles.linkArrow} /> Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Services</h3>
          <ul className={styles.links}>
            <li><Link href="/services/student-visa"><ArrowRight size={14} className={styles.linkArrow} /> Student Visa</Link></li>
            <li><Link href="/services/tourist-visa"><ArrowRight size={14} className={styles.linkArrow} /> Tourist Visa</Link></li>
            <li><Link href="/services/business-visa"><ArrowRight size={14} className={styles.linkArrow} /> Business Visa</Link></li>
            <li><Link href="/services/work-permit"><ArrowRight size={14} className={styles.linkArrow} /> Work Permit</Link></li>
            <li><Link href="/services/pr-services"><ArrowRight size={14} className={styles.linkArrow} /> PR Services</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Contact Info</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <div className={styles.contactIconCircle}>
                <MapPin size={16} />
              </div>
              <span>Unit UF-75 1st Floor Cantonment Shopping Mall, Rashid Minhas Road, Faisal Cantonment, Karachi</span>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIconCircle}>
                <Phone size={16} />
              </div>
              <a href="tel:03201173129" className={styles.contactLink}>03201173129</a>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIconCircle}>
                <Mail size={16} />
              </div>
              <a href="mailto:starwaytrader@gmail.com" className={styles.contactLink}>starwaytrader@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <p>&copy; {currentYear} Starway Immigration. All Rights Reserved.</p>
          <p style={{ opacity: 0.6 }}>Designed for Elite Success</p>
        </div>
      </div>
    </footer>
  );
}

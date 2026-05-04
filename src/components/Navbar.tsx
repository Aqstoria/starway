import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <div className={styles.contactInfo}>
            <span>📧 starwaytrader@gmail.com</span>
            <span>📞 03201173129</span>
            <span>🕒 Mon - Fri 11am to 7pm</span>
          </div>
          <div className={styles.socials}>
            {/* Social links can be added here */}
          </div>
        </div>
      </div>
      
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoStar}>STAR</span>WAY
            <span className={styles.logoSubText}>IMMIGRATION</span>
          </Link>
          
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          
          <Link href="/contact" className="btn-primary">Apply Now</Link>
          
          <button className={styles.mobileToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

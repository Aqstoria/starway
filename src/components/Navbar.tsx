'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Clock } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Mail size={14} className={styles.topbarIcon} />
              <span>starwaytrader@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={14} className={styles.topbarIcon} />
              <span>03201173129</span>
            </div>
            <div className={`${styles.contactItem} ${styles.hideMobile}`}>
              <Clock size={14} className={styles.topbarIcon} />
              <span>Mon - Fri 11am to 7pm</span>
            </div>
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
          
          <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            <ul className={styles.navLinks}>
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blogs</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
            <Link href="/contact" className={`btn-primary ${styles.mobileApplyBtn}`} onClick={() => setIsOpen(false)}>Apply Now</Link>
          </div>
          
          <button className={`${styles.mobileToggle} ${isOpen ? styles.toggleActive : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}


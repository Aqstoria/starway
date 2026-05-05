import styles from './page.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Starway Immigration and our mission to help you achieve your dreams.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className={styles.subHeading}>Our Story</span>
              <h2>A Legacy of Professional <span>Immigration Services</span></h2>
              <p>
                Founded on the principles of integrity and expertise, Starway Immigration has grown to become a leading consultancy firm. We specialize in providing comprehensive visa and immigration solutions tailored to the unique needs of each client.
              </p>
              <p>
                Our team of dedicated professionals understands that moving to a new country is a life-changing decision. That&apos;s why we go above and beyond to ensure a smooth, transparent, and successful application process.
              </p>
              
              <div className={styles.missionVision}>
                <div className={styles.card}>
                  <h3>Our Mission</h3>
                  <p>To provide accessible, high-quality immigration services that empower individuals to pursue global opportunities.</p>
                </div>
                <div className={styles.card}>
                  <h3>Our Vision</h3>
                  <p>To be the most trusted and reliable immigration consultancy worldwide, recognized for our ethical standards and success rate.</p>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
               <Image 
                 src="/who we are.png" 
                 alt="About Starway Immigration" 
                 fill 
                 className={styles.aboutImg}
               />
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.team}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Our Team</span>
            <h2>Meet Our <span>Expert Consultants</span></h2>
          </div>
          <div className={styles.teamGrid}>
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className={styles.teamCard}>
                <div className={styles.memberImg}></div>
                <h3>Expert Consultant {member}</h3>
                <p>Immigration Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

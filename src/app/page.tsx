import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const services = [
    { title: "Student Visa", icon: "🎓", desc: "Expert guidance for students looking to study abroad in world-class universities." },
    { title: "Tourist Visa", icon: "✈️", desc: "Seamless visa processing for your next vacation or family visit anywhere in the world." },
    { title: "Business Visa", icon: "💼", desc: "Professional assistance for entrepreneurs and professionals expanding their horizons." },
    { title: "Work Permit", icon: "🛠️", desc: "Reliable support for skilled workers seeking career opportunities internationally." },
    { title: "Family Visa", icon: "🏠", desc: "Bringing families together with dedicated residency and spouse visa services." },
    { title: "PR Services", icon: "🌏", desc: "Long-term pathways for permanent residency and citizenship in top countries." }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image 
          src="/hero-bg.png" 
          alt="Starway Immigration Hero" 
          fill 
          priority 
          className={styles.heroImg}
        />
        <div className={`container ${styles.heroContent}`}>
          <h1>Dedicated Immigration & Visa <br /><span>Consultancy Services</span></h1>
          <p>Your gateway to global opportunities. We provide expert guidance for students, professionals, and families to achieve their international dreams.</p>
          <div className={styles.heroBtns}>
            <Link href="/contact" className="btn-primary">Apply Now</Link>
            <Link href="/services" className={styles.btnOutline}>Our Services</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section-padding ${styles.about}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutText}>
            <span className={styles.subHeading}>Who We Are</span>
            <h2>We Are Specialists In <span>International Immigration</span> & Visas</h2>
            <p>
              Starway Immigration has been a trusted name in the industry, helping thousands of individuals navigate the complexities of international travel and residency.
            </p>
            <p>
              Our team of experienced consultants provides personalized advice, ensuring that every application is handled with precision and care. We believe in transparency, efficiency, and success.
            </p>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔️</span>
                <div>
                  <h4>Certified Consultants</h4>
                  <p>Our team consists of registered and highly experienced professionals.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✔️</span>
                <div>
                  <h4>High Success Rate</h4>
                  <p>We take pride in our track record of successful visa approvals.</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="btn-primary">Read More</Link>
          </div>
          <div className={styles.aboutImage}>
            <div className={styles.imgBadge}>
              <strong>10+</strong>
              <span>Years of Experience</span>
            </div>
            <div className={styles.imgFrame}></div>
            <Image 
              src="/who we are.png" 
              alt="Who We Are" 
              fill 
              className={styles.aboutImg}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section-padding ${styles.services}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>What We Offer</span>
            <h2>Our Comprehensive <span>Visa Services</span></h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href="/services" className={styles.viewMore}>View More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country List Section */}
      <section className={`section-padding ${styles.countries}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Country List</span>
            <h2>The Countries we serve for <br /><span>visa & Immigration</span></h2>
          </div>
          <div className={styles.countryGrid}>
            {[
              { name: "Germany", code: "de", services: ["Visitor Visa", "Student Visa & Admission", "Work Visa"] },
              { name: "UK", code: "gb", services: ["Visitor Visa", "Student Visa & Admission", "Immigration", "Family Visa"] },
              { name: "Qatar", code: "qa", services: ["Visitor Visa", "Work Visa", "Freelance Visa", "Business Setup"] },
              { name: "Australia", code: "au", services: ["Visitor Visa", "Student Visa & Admission", "Work Visa - H1B", "Business Visa"] },
              { name: "USA", code: "us", services: ["Visitor Visa", "Student Visa & Admission", "Work Visa", "Business Visa"] },
              { name: "Canada", code: "ca", services: ["Visitor Visa", "Student Visa & Admission", "Work Visa - H1B", "Business Visa"] },
              { name: "France", code: "fr", services: ["Visitor Visa", "Student Visa & Admission", "Work Visa - H1B", "Business Visa"] },
              { name: "Finland", code: "fi", services: ["Visitor Visa", "Student Visa & Admission", "Work Visa - H1B", "Business Visa"] }
            ].map((country, i) => (
              <div key={i} className={styles.countryCard}>
                <div className={styles.countryHeader}>
                  <div className={styles.flagWrapper}>
                    <img 
                      src={`https://flagcdn.com/w80/${country.code}.png`} 
                      alt={country.name}
                      className={styles.flagImg}
                    />
                    <span className={styles.countryCode}>{country.code.toUpperCase()}</span>
                  </div>
                  <div>
                    <span className={styles.visaServiceLabel}>Visa Service</span>
                    <h3>{country.name}</h3>
                  </div>
                </div>
                <ul className={styles.countryServices}>
                  {country.services.map((s, j) => <li key={j}>✓ {s}</li>)}
                </ul>
                <Link href="/contact" className={styles.readMoreBtn}>READ MORE <span>↗</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className={`section-padding ${styles.detailedFeatures}`}>
        <div className={styles.mapBg}></div>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Why Choose Us</span>
            <h2>Prompt Visa & Immigration <br /><span>Services</span></h2>
          </div>
          <div className={styles.detailedFeaturesGrid}>
            {[
              { title: "Global Immigration Network", desc: "We maintain strong connections with international employers, embassies, and legal partners." },
              { title: "Efficiency & Professional Expertise", desc: "Our experienced team handles documentation, eligibility checks, and application processes with precision." },
              { title: "Tailored Visa Solutions", desc: "Every case is unique. We provide customized visa solutions based on your profile and future goals." },
              { title: "Fast & Transparent Processing", desc: "We follow a streamlined and fastest-possible process, keeping clients informed at every stage." },
              { title: "Trusted & Reliable Excellence", desc: "Starway Immigration is a trusted name in visa consultancy, known for honesty and compliance." },
              { title: "Expert Support Panel", desc: "Our dedicated support panel guides you step-by-step, offering expert advice and post-visa assistance." }
            ].map((feat, i) => (
              <div key={i} className={styles.featCard}>
                <div className={styles.featIcon}>✨</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Logos */}
      <section className={styles.partners}>
        <div className="container">
          <div className={styles.logoGrid}>
            <div className={styles.logoItem}>UWE Bristol</div>
            <div className={styles.logoItem}>University of East Anglia</div>
            <div className={styles.logoItem}>UCW Canada West</div>
            <div className={styles.logoItem}>St. Arkansas State</div>
          </div>
        </div>
      </section>

      {/* Testimonials section was already there, but let's make it look like the reference */}
      <section className={`section-padding ${styles.testimonials}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Work Process</span>
            <h2>Our Client Have Trusted <br /><span>Us for our work</span></h2>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.userImg}></div>
              <p>"I am thankful to Starway Immigration for helping me obtain my Qatar Work Visa. Highly recommended for genuine visa services."</p>
              <div className={styles.userInfo}>
                <div>
                  <strong>Farhan Bahadur</strong>
                  <span>Order Picker, Al Meera</span>
                </div>
                <div className={styles.rating}>⭐ 4.8</div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.userImg}></div>
              <p>"I am extremely grateful for making my dream true. The helped me process my visa for Canada. It was accepted in record time."</p>
              <div className={styles.userInfo}>
                <div>
                  <strong>Ashley Jonathon</strong>
                  <span>Student, Thompson River</span>
                </div>
                <div className={styles.rating}>⭐ 4.8</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

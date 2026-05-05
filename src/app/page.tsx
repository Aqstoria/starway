'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  Plane, 
  Briefcase, 
  Wrench, 
  Home as HomeIcon, 
  Globe, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  User 
} from 'lucide-react';
import { blogPosts } from '@/data/blogs';
import styles from './page.module.css';

export default function Home() {
  const [targetCountry, setTargetCountry] = useState('');
  const [visaType, setVisaType] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleCheckEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetCountry || !visaType) {
      alert("Please select both a target country and visa type.");
      return;
    }
    
    // Construct WhatsApp message with target details
    const text = `Hi Starway Immigration, I'd like to check my eligibility for a *${visaType}* to *${targetCountry}*. ${userPhone ? `My phone number is ${userPhone}.` : ''}`;
    const whatsappUrl = `https://wa.me/923201173129?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackService, setCallbackService] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone || !callbackService) {
      alert("Please fill in all required fields.");
      return;
    }
    setCallbackSubmitted(true);
    
    const text = `Hi Starway Immigration, I'd like to request a Call Back.\n\n👤 *Name:* ${callbackName}\n📞 *Phone:* ${callbackPhone}\n💼 *Service Interested:* ${callbackService}`;
    const whatsappUrl = `https://wa.me/923201173129?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };


  const services = [
    { title: "Student Visa", icon: <GraduationCap size={36} />, desc: "Expert guidance for students looking to study abroad in world-class universities." },
    { title: "Tourist Visa", icon: <Plane size={36} />, desc: "Seamless visa processing for your next vacation or family visit anywhere in the world." },
    { title: "Business Visa", icon: <Briefcase size={36} />, desc: "Professional assistance for entrepreneurs and professionals expanding their horizons." },
    { title: "Work Permit", icon: <Wrench size={36} />, desc: "Reliable support for skilled workers seeking career opportunities internationally." },
    { title: "Family Visa", icon: <HomeIcon size={36} />, desc: "Bringing families together with dedicated residency and spouse visa services." },
    { title: "PR Services", icon: <Globe size={36} />, desc: "Long-term pathways for permanent residency and citizenship in top countries." }
  ];

  return (
    <div className={styles.home}>
      {/* Premium Hero Section */}
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
          <div className={styles.heroGrid}>
            
            {/* Left Content */}
            <div className={styles.heroLeft}>
              <div className={styles.heroBadge}>
                <span>✨ CERTIFIED GLOBAL CONSULTANTS</span>
              </div>
              <h1 className={styles.heroTitle}>
                Navigate Your Path to <br />
                <span className={styles.gradientText}>Global Opportunities</span>
              </h1>
              <p className={styles.heroDescription}>
                Starway Immigration is a premium, high-success consultancy providing professional, certified pathways for students, professionals, and families worldwide. Your dreams are our destination.
              </p>
              
              <div className={styles.heroBtns}>
                <Link href="/contact" className="btn-primary">Book Consultation</Link>
                <Link href="/services" className={styles.btnOutline}>Our Services</Link>
              </div>

              {/* Trust Stats Indicator */}
              <div className={styles.heroStats}>
                <div className={styles.miniStat}>
                  <strong>99.2%</strong>
                  <span>Success Rate</span>
                </div>
                <div className={styles.miniStat}>
                  <strong>10,000+</strong>
                  <span>Happy Clients</span>
                </div>
                <div className={styles.miniStat}>
                  <strong>10+</strong>
                  <span>Destinations</span>
                </div>
              </div>
            </div>

            {/* Right Content - Eligibility Form Widget */}
            <div className={styles.heroRight}>
              <div className={styles.glassCard}>
                <div className={styles.cardHeader}>
                  <h3>Check Eligibility</h3>
                  <p>Get instant response on WhatsApp</p>
                </div>
                
                <form onSubmit={handleCheckEligibility} className={styles.eligibilityForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="country">Destination Country</label>
                    <select 
                      id="country" 
                      value={targetCountry} 
                      onChange={(e) => setTargetCountry(e.target.value)}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">-- Choose Destination --</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="USA">United States (USA)</option>
                      <option value="Germany">Germany</option>
                      <option value="Australia">Australia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Finland">Finland</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="visa">Visa Category</label>
                    <select 
                      id="visa" 
                      value={visaType} 
                      onChange={(e) => setVisaType(e.target.value)}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">-- Select Visa Type --</option>
                      <option value="Student Visa">🎓 Student Visa</option>
                      <option value="Tourist Visa">✈️ Tourist Visa</option>
                      <option value="Business Visa">💼 Business Visa</option>
                      <option value="Work Permit">🛠️ Work Permit</option>
                      <option value="Family Visa">🏠 Family Visa</option>
                      <option value="PR Services">🌏 PR Services</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="e.g., +92 300 1234567" 
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Instant Check <span>↗</span>
                  </button>
                </form>
              </div>
            </div>

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
                <Link href="/services" className={styles.viewMore}>View More <ArrowRight size={16} /></Link>
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

      {/* Request Call Back Section */}
      <section className={styles.callbackSection}>
        <div className={`container ${styles.callbackContainer}`}>
          <div className={styles.callbackInfo}>
            <span className={styles.subHeading}>Get in Touch</span>
            <h2>Request a <span>Call Back</span></h2>
            <p>
              Have questions about your visa options or eligibility? Provide your contact details, and one of our Senior Immigration Consultants will reach out to you within 24 business hours for a detailed evaluation.
            </p>
            <div className={styles.directContactLine}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <h4>Direct Phone Support</h4>
                <p>03201173129 (Mon - Fri, 11am to 7pm)</p>
              </div>
            </div>
          </div>
          
          <div className={styles.callbackFormWrapper}>
            {callbackSubmitted ? (
              <div className={styles.callbackSuccess}>
                <div className={styles.successIcon}>✓</div>
                <h3>Request Received!</h3>
                <p>Thank you, <strong>{callbackName}</strong>. Your callback request has been registered.</p>
                <p className={styles.successSub}>Opening official WhatsApp channel for instant confirmation...</p>
                <button 
                  onClick={() => setCallbackSubmitted(false)} 
                  className={styles.resetBtn}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className={styles.callbackForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroupCol}>
                    <label htmlFor="cbName">Full Name</label>
                    <input 
                      type="text" 
                      id="cbName"
                      placeholder="e.g., Ahmad Khan"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.formGroupCol}>
                    <label htmlFor="cbPhone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="cbPhone"
                      placeholder="e.g., 03201173129"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroupSingle}>
                  <label htmlFor="cbService">Service of Interest</label>
                  <select 
                    id="cbService"
                    value={callbackService}
                    onChange={(e) => setCallbackService(e.target.value)}
                    required
                  >
                    <option value="">-- Choose Visa Category --</option>
                    <option value="Student Visa">🎓 Student Visa & Admission</option>
                    <option value="Tourist Visa">✈️ Tourist & Visit Visa</option>
                    <option value="Work Permit">🛠️ Work Permit Pathway</option>
                    <option value="PR Services">🌏 Permanent Residency (PR)</option>
                    <option value="Business Visa">💼 Business & Investor Visa</option>
                    <option value="Family Visa">🏠 Family & Spouse Visa</option>
                  </select>
                </div>
                
                <button type="submit" className={styles.callbackSubmitBtn}>
                  Request Callback Now <span>↗</span>
                </button>
              </form>
            )}
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
          <div className={styles.partnersTitle}>
            <span>Official University & Enrollment Partners</span>
          </div>
          <div className={styles.logoGrid}>
            <div className={styles.logoItem}>UWE Bristol</div>
            <div className={styles.logoItem}>University of East Anglia</div>
            <div className={styles.logoItem}>UCW Canada West</div>
            <div className={styles.logoItem}>St. Arkansas State</div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className={`section-padding ${styles.homeBlogs}`}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '45px' }}>
            <div>
              <span className={styles.subHeading}>Immigration Guides</span>
              <h2>Latest <span>News & Articles</span></h2>
            </div>
            <Link href="/blog" className="btn-primary" style={{ padding: '10px 25px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View All Blogs <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.homeBlogGrid}>
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className={styles.homeBlogCard}>
                <div className={styles.homeBlogImgWrapper}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className={styles.homeBlogImg}
                    unoptimized={post.image.includes('unsplash.com')}
                  />
                  <span className={styles.homeBlogCategory}>{post.category}</span>
                </div>
                <div className={styles.homeBlogContent}>
                  <div className={styles.homeBlogMeta}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {post.date}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className={styles.homeBlogLink}>
                    Read Full Guide <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
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

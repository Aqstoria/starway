import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import { Calendar, Clock, User, ArrowLeft, Phone, ShieldCheck } from 'lucide-react';
import styles from '../page.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.blogPage}>
      {/* Mini Top Banner spacing */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.categoryBadge} style={{ background: 'var(--accent-color)', color: 'var(--primary-color)' }}>{post.category}</span>
          <h1 style={{ marginTop: '15px' }}>{post.title}</h1>
        </div>
      </section>

      <div className="container">
        <article className={styles.detailContainer}>
          {/* Main Article Image */}
          <div className={styles.detailImageWrapper}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className={styles.detailImage}
              unoptimized={post.image.includes('unsplash.com')}
            />
          </div>

          <div className={styles.detailBody}>
            {/* Back to Blogs */}
            <Link href="/blog" className={styles.backBtn}>
              <ArrowLeft size={16} /> Back to Blogs
            </Link>

            {/* Metadata Panel */}
            <div className={styles.detailMeta}>
              <div className={styles.metaItem}>
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Main Content Rendered Safely */}
            <div className={styles.articleContent}>
              {post.content.split('\n\n').map((paragraph, index) => {
                // If it represents bullet items
                if (paragraph.startsWith('* ')) {
                  return (
                    <ul key={index}>
                      {paragraph.split('\n').map((li, liIndex) => (
                        <li key={liIndex}>{li.replace('* ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                
                // If it is a header level 3
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
                }
                
                // If it represents a numeric item list
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <ol key={index}>
                      {paragraph.split('\n').map((li, liIndex) => (
                        <li key={liIndex}>{li.substring(li.indexOf('.') + 1).trim()}</li>
                      ))}
                    </ol>
                  );
                }

                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            {/* Custom CTA Box */}
            <div className={styles.ctaBox}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                <ShieldCheck size={28} style={{ color: 'var(--accent-color)' }} />
                <h4 style={{ margin: 0 }}>Registered & Certified Immigration Advice</h4>
              </div>
              <p>
                Don't risk your international future with incomplete applications. Our professional team at Starway Immigration offers a free preliminary evaluation.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '15px' }}>
                <a 
                  href="tel:03201173129" 
                  className="btn-primary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
                >
                  <Phone size={16} /> Call 0320 1173129
                </a>
                <a 
                  href="https://wa.me/923201173129" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#25D366', borderColor: '#25D366', color: '#fff' }}
                >
                  Chat on WhatsApp ↗
                </a>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
}

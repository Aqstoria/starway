import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: "Latest News & Immigration Blogs | Starway Immigration",
  description: "Read the latest immigration guides, visa policies, requirements, and expert tips for studying and working abroad from Starway Immigration.",
};

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Immigration News & Blogs</h1>
          <p>Your ultimate repository for international study, work pathways, and visa tips</p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className={post.image.includes('images.unsplash.com') ? styles.postImage : ''}
                    unoptimized={post.image.includes('unsplash.com')}
                  />
                </div>
                
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.categoryBadge}>{post.category}</span>
                    <span className={styles.readTime}>
                      <Clock className="w-3.5 h-3.5 inline mr-1.5" size={14} style={{ display: 'inline', marginRight: '5px' }} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  
                  <Link href={`/blog/${post.id}`} className={styles.readMoreLink}>
                    Read Article 
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

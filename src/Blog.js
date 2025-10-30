import React from 'react';
import { motion } from 'framer-motion';

function Blog({ setIsHovering }) {
  const blogPosts = [
    {
      title: 'The Future of Business AI',
      excerpt: 'Exploring how reasoning-based AI systems are transforming enterprise decision-making',
      date: 'Oct 28, 2025',
      readTime: '5 min read'
    },
    {
      title: 'Beyond Pattern Recognition',
      excerpt: 'Why modern businesses need AI that can think, not just predict',
      date: 'Oct 25, 2025',
      readTime: '7 min read'
    },
    {
      title: 'Building Adaptive Systems',
      excerpt: 'How we create AI that learns and evolves with your business context',
      date: 'Oct 20, 2025',
      readTime: '6 min read'
    },
    {
      title: 'The Reasoning Revolution',
      excerpt: 'Understanding the shift from statistical models to reasoning engines',
      date: 'Oct 15, 2025',
      readTime: '8 min read'
    },
    {
      title: 'AI in Enterprise Workflows',
      excerpt: 'Case studies on integrating reasoning AI into complex business processes',
      date: 'Oct 10, 2025',
      readTime: '10 min read'
    },
    {
      title: 'Transparent AI Systems',
      excerpt: 'Why explainability matters in business-critical AI decisions',
      date: 'Oct 5, 2025',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="page-content">
      <motion.section 
        className="page-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Blog</h1>
        <p className="page-subtitle">Insights on AI and business reasoning</p>
      </motion.section>

      <motion.section 
        className="blog-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="read-more">
              Read article →
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}

export default Blog;

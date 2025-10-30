import React from 'react';
import { motion } from 'framer-motion';

function About({ setIsHovering, setShowContactForm }) {
  return (
    <div className="page-content">
      <motion.section 
        className="page-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <p className="page-subtitle">Building AI that reasons</p>
      </motion.section>

      <motion.section 
        className="content-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="content-grid">
          <div className="content-block">
            <h2>Our Mission</h2>
            <p>
              We believe AI should do more than recognize patterns. It should understand, 
              deliberate, and reason through complex challenges the way experienced teams do.
            </p>
            <p>
              The Reasoning Company builds artificial intelligence systems that think deeply 
              about your business problems, adapting to your unique context and constraints.
            </p>
          </div>

          <div className="content-block">
            <h2>Our Approach</h2>
            <p>
              We don't believe in one-size-fits-all solutions. Every business has unique 
              challenges, workflows, and goals. Our AI systems are designed to learn and 
              adapt to your specific needs.
            </p>
            <p>
              Through advanced reasoning models and deep business logic integration, we create 
              AI that becomes a natural extension of your team.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="values-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Our Values</h2>
        <div className="values-grid">
          {[
            { number: '01', title: 'Intelligence First', description: 'We prioritize deep reasoning over shallow pattern matching' },
            { number: '02', title: 'Business Context', description: 'Every solution is tailored to your specific domain and needs' },
            { number: '03', title: 'Continuous Learning', description: 'Our systems evolve and improve with your business' },
            { number: '04', title: 'Transparency', description: 'You understand how and why our AI makes decisions' },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <span className="value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2>Ready to transform your business?</h2>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          onClick={() => setShowContactForm(true)}
        >
          Get in Touch
        </motion.button>
      </motion.section>
    </div>
  );
}

export default About;

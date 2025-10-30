import React from 'react';
import { motion } from 'framer-motion';
import './Construction.css';

function Construction() {
  return (
    <div className="construction-page">
      <motion.div
        className="construction-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/logo.png" alt="The Reasoning Company" className="construction-logo" />
        </motion.div>

        <motion.div
          className="construction-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Under Construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="construction-subtitle"
        >
          Building something intelligent
        </motion.p>

        <motion.div
          className="construction-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.svg 
            width="60" 
            height="60" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              stroke="#00167a" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.3, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path 
              d="M2 17L12 22L22 17" 
              stroke="#00167a" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path 
              d="M2 12L12 17L22 12" 
              stroke="#00167a" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.7, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.svg>
        </motion.div>

        <motion.p
          className="year"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          2024
        </motion.p>
      </motion.div>

      {/* Minimal grid background */}
      <div className="construction-grid" />
    </div>
  );
}

export default Construction;

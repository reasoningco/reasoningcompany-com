import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./App.css";
import About from "./About";
import Blog from "./Blog";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log(`
      
                                                                            
   ████████╗██╗  ██╗███████╗    ██████╗ ███████╗ █████╗ ███████╗ ██████╗  
   ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔════╝██╔══██╗██╔════╝██╔═══██╗ 
      ██║   ███████║█████╗      ██████╔╝█████╗  ███████║███████╗██║   ██║ 
      ██║   ██╔══██║██╔══╝      ██╔══██╗██╔══╝  ██╔══██║╚════██║██║   ██║ 
      ██║   ██║  ██║███████╗    ██║  ██║███████╗██║  ██║███████║╚██████╔╝ 
      ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝  
                                                                
███╗   ██╗██╗███╗   ██╗ ██████╗                    
████╗  ██║██║████╗  ██║██╔════╝                 
██╔██╗ ██║██║██╔██╗ ██║██║  ███╗                 
██║╚██╗██║██║██║╚██╗██║██║   ██║                
██║ ╚████║██║██║ ╚████║╚██████╔╝                
╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝                   
                                                                            
      ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗      ║
     ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝      ║
     ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝       ║
     ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝        ║
     ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║         ║
      ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝         ║
                                                                            ║
                      AI that thinks for your business                      ║
                                                                            ║
                          Built with intelligence                           ║
                      https://github.com/reasoningco                        ║
                             
      `);
  }, []);

  const getEasternTime = () => {
    return currentTime.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="App">
      {/* Background Grid Pattern */}
      <div className="bg-grid" />

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Scroll Progress - Only on Blog Page */}
      {currentPage === "blog" && (
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      {/* Navigation */}
      <motion.nav
        className="main-nav"
        initial={{ y: -100 }}
        animate={{
          y: scrollDirection === "down" && lastScrollY > 100 ? -120 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="nav-brand">
          <button
            className="nav-home-icon"
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo(0, 0);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Home"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`nav-link brand-name ${
              currentPage === "home" ? "active" : ""
            }`}
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo(0, 0);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            The Reasoning Company
          </button>
        </div>
        <div className="nav-links">
          <button
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("about");
              window.scrollTo(0, 0);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            About
          </button>
          <button
            className={`nav-link ${currentPage === "blog" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("blog");
              window.scrollTo(0, 0);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Blog
          </button>
          <button
            className="nav-link"
            onClick={() => setShowContactForm(true)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="contact-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Contact</span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Conditional Page Rendering */}
      {currentPage === "about" && (
        <About
          setIsHovering={setIsHovering}
          setShowContactForm={setShowContactForm}
        />
      )}
      {currentPage === "blog" && <Blog setIsHovering={setIsHovering} />}

      {/* Home Page */}
      {currentPage === "home" && (
        <>
          {/* Hero Section */}
          <motion.section className="hero" style={{ opacity, scale }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero-content"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-title"
              >
                {["The", "Reasoning", "Company"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      color: "var(--accent)",
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      display: "inline-block",
                      marginRight: i < 2 ? "0.3em" : "0",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  AI that thinks for your business
                </motion.span>
                <motion.span
                  className="cursor-blink"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.p>
              <motion.div
                className="cta-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                  onClick={() => setShowContactForm(true)}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="scroll-dot"
              />
            </motion.div>
          </motion.section>

          {/* Features Section */}
          <section className="features">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="section-header"
            >
              <h2>Intelligent by design</h2>
              <motion.div
                className="section-underline"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <div className="features-grid">
              {[
                {
                  title: "Deep Reasoning",
                  description:
                    "Advanced AI models that understand context and nuance",
                },
                {
                  title: "Business Logic",
                  description:
                    "Tailored solutions for complex enterprise challenges",
                },
                {
                  title: "Scalable Systems",
                  description: "Infrastructure that grows with your ambitions",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <motion.div
                    className="feature-number"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </motion.div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <motion.div
                    className="feature-arrow"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="philosophy">
            <motion.div
              className="philosophy-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="philosophy-text"
              >
                <h2>We build AI that reasons</h2>
                <p>
                  Not just pattern matching. Not just predictions. We create
                  systems that understand, deliberate, and solve complex
                  problems the way your best teams do.
                </p>
                <p>
                  Every business has unique challenges. We build AI that adapts
                  to yours.
                </p>
              </motion.div>

              <motion.div
                className="stats-grid"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { number: "10x", label: "Faster Decisions" },
                  { number: "99%", label: "Accuracy Rate" },
                  { number: "24/7", label: "Always Learning" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="final-cta">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="final-cta-content"
            >
              <h2>Ready to think bigger?</h2>
              <p>Let's build the future of your business together</p>
              <motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                onClick={() => setShowContactForm(true)}
              >
                Start a Conversation
              </motion.button>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="footer-content"
            >
              <div className="footer-brand">
                <h3>The Reasoning Company</h3>
                <p>AI that thinks for business</p>
              </div>
              <div className="footer-right">
                <div className="footer-time">
                  <span className="time-label">EST</span>
                  <span className="time-display">{getEasternTime()}</span>
                </div>
                <div className="footer-links">
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("about");
                      window.scrollTo(0, 0);
                    }}
                  >
                    About
                  </a>
                  <a
                    href="#blog"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("blog");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Blog
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowContactForm(true);
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </footer>
        </>
      )}

      {/* Contact Form Lightbox */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setShowContactForm(false)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                ×
              </button>
              <h2>Start a Conversation</h2>
              <p className="form-subtitle">
                Let's discuss how AI can transform your business
              </p>

              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitting(true);
                  setTimeout(() => {
                    setFormSubmitting(false);
                    setShowContactForm(false);
                    alert("Message sent! We'll be in touch soon.");
                  }, 2000);
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Company"
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Tell us about your challenge"
                    rows="4"
                    required
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="cta-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  disabled={formSubmitting}
                >
                  {formSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          display: "inline-block",
                          marginRight: "0.5rem",
                        }}
                      >
                        ⟳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Notice */}
      <AnimatePresence>
        {showCookieNotice && (
          <motion.div
            className="cookie-notice"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="cookie-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                <circle cx="16" cy="9" r="1" fill="currentColor" />
                <circle cx="9" cy="15" r="1" fill="currentColor" />
                <circle cx="15" cy="15" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="cookie-content">
              <h3>Privacy Notice</h3>
              <p>
                We use minimal cookies to enhance your browsing experience and
                analyze site performance.
              </p>
            </div>
            <div className="cookie-actions">
              <button
                className="cookie-btn secondary"
                onClick={() => setShowCookieNotice(false)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Decline
              </button>
              <button
                className="cookie-btn primary"
                onClick={() => setShowCookieNotice(false)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Accept
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {lastScrollY > 500 && (
          <motion.button
            className="back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

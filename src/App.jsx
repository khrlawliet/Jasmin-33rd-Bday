import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, animate } from 'framer-motion'
import { imageData } from './imageData'
import ColorThief from 'colorthief'
import MusicPlayer from './MusicPlayer'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)')
  const [imageColors, setImageColors] = useState({})
  const { scrollYProgress } = useScroll()

  // Auto-hide welcome screen after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 5000) // 5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showWelcome) {
    return (
      <motion.div
        className="welcome-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hearts-container"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💖
          </motion.div>

          <motion.h1
            className="welcome-name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Jasmin
          </motion.h1>

          <motion.h2
            className="welcome-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            33 Years of Love & Light
          </motion.h2>

          <motion.p
            className="welcome-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            December 09, 2025
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="welcome-message">
              33 years of being absolutely amazing<br />
              33 memories to celebrate<br />
              33 reasons why I love you
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </motion.div>
            <p className="scroll-text">Scroll to begin</p>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0
              }}
              animate={{
                y: -50,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="app"
      animate={{ backgroundColor }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Fixed Header */}
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">Jasmin</h1>
        <p className="subtitle">33 Years of Love & Light</p>
      </motion.header>

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Music Player */}
      <MusicPlayer />

      {/* Main Content - Scrollable Gallery */}
      <main className="gallery">
        {imageData.map((item, index) => (
          <ImageSection
            key={item.id}
            item={item}
            index={index}
            onColorExtracted={(color) => {
              setImageColors(prev => ({ ...prev, [item.id]: color }))
            }}
            onInView={() => {
              const color = imageColors[item.id]
              if (color) {
                setBackgroundColor(color)
              }
            }}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="footer-text">Made with endless love</p>
          <p className="footer-heart">❤️</p>
          <p className="footer-date">December 09, 2025</p>
        </motion.div>
      </footer>
    </motion.div>
  )
}

// Individual Image Section Component
function ImageSection({ item, index, onColorExtracted, onInView }) {
  const isLeft = index % 2 === 0
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const [colorExtracted, setColorExtracted] = useState(false)

  // Extract color from image
  useEffect(() => {
    if (imgRef.current && !colorExtracted) {
      const img = imgRef.current

      const extractColor = () => {
        try {
          const colorThief = new ColorThief()
          const color = colorThief.getColor(img)

          // Convert RGB to a lighter, more pastel version for background
          const r = Math.min(255, color[0] + 100)
          const g = Math.min(255, color[1] + 100)
          const b = Math.min(255, color[2] + 100)

          // Make it even lighter for a subtle effect
          const lighterR = Math.floor((r + 255) / 2)
          const lighterG = Math.floor((g + 255) / 2)
          const lighterB = Math.floor((b + 255) / 2)

          const backgroundColor = `rgb(${lighterR}, ${lighterG}, ${lighterB})`
          onColorExtracted(backgroundColor)
          setColorExtracted(true)
        } catch (error) {
          console.log('Color extraction skipped for image:', item.id)
          // Fallback to white
          onColorExtracted('rgb(255, 255, 255)')
          setColorExtracted(true)
        }
      }

      if (img.complete) {
        extractColor()
      } else {
        img.addEventListener('load', extractColor)
        return () => img.removeEventListener('load', extractColor)
      }
    }
  }, [colorExtracted, item.id, onColorExtracted])

  // Track when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView()
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [onInView])

  return (
    <motion.section
      ref={sectionRef}
      className={`image-section ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <div className="section-content">
        {/* Image Container */}
        <motion.div
          className="image-wrapper"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="image-container">
            <img
              ref={imgRef}
              src={item.src}
              alt={item.title}
              loading="lazy"
              crossOrigin="anonymous"
            />
            <div className="image-overlay">
              <span className="image-number">{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>

        {/* Message Container */}
        <motion.div
          className="message-wrapper"
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          <div className="message-content">
            <h3 className="message-title">{item.title}</h3>
            <p className="message-text">{item.message}</p>
            <div className="message-divider" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default App

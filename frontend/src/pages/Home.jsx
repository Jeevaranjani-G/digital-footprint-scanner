import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


 export default function Home({ goToLanding }) {
  const [unlocked, setUnlocked] = useState(false);
  
  
  const phrases = [
    "Analyze your digital presence",
    "Secure your online identity",
    "Protect your digital footprint"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>

      {/* LOCK */}
      <motion.div style={styles.lockContainer}>
        <motion.div
          animate={unlocked ? { rotate: -35, y: -10 } : { y: [0, -8, 0] }}
          transition={{ duration: 0.6 }}
          style={styles.shackle}
        />

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={styles.lockBody}
        >
          <div style={styles.keyhole} />
        </motion.div>
      </motion.div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.title}
      >
        Discover Your Digital Footprint
      </motion.h1>

      {/* ROTATING TEXT */}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={styles.subtitle}
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
  setUnlocked(true);
  setTimeout(() => {
    goToLanding();   // ✅ correct
  }, 800);
}}
        style={styles.button}
      >
        Find Your Footprints
      </motion.button>

    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  lockContainer: {
    marginBottom: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  shackle: {
    width: "40px",
    height: "40px",
    border: "4px solid #3b82f6",
    borderBottom: "none",
    borderRadius: "20px 20px 0 0"
  },

  lockBody: {
    width: "80px",
    height: "60px",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    borderRadius: "10px",
    marginTop: "-5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 20px rgba(59,130,246,0.6)"
  },

  keyhole: {
    width: "10px",
    height: "15px",
    background: "white",
    borderRadius: "5px"
  },

  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "25px"
  },

  button: {
    padding: "12px 28px",
    background: "linear-gradient(90deg, #3b82f6, #9333ea)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
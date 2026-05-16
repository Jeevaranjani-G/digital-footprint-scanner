import { motion } from "framer-motion";
import { useState } from "react";
import AuthModal from "../components/AuthModal";
import { useNavigate } from "react-router-dom";

export default function Landing({ setUser }) {

  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null); // ✅ ADD HERE

  return (
    <div style={styles.page}>

      {/* TOP BAR */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={styles.topBar}
      >
        <div style={styles.topLeftText}>
         
        </div>

        <div style={styles.menuGroup}>
          
        </div>
      </motion.div>

      {/* CENTER CARD */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        style={styles.card}
      >

        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <h1 style={styles.title}>FootprintX</h1>

          <p style={styles.description}>
            FootprintX helps you discover where your personal data exists online.
            It scans publicly available platforms to detect exposure risks,
            identifies security threats, and provides smart recommendations
            to secure your digital identity before it’s too late.
          </p>

          <div style={styles.buttonRow}>
            <button
  style={styles.login}
  onClick={() => setModalType("login")}
>
  Login
</button>

<button
  style={styles.signup}
  onClick={() => setModalType("signup")}
>
  Sign Up
</button>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div style={styles.right}>

          {/* Glow */}
          <div style={styles.glow}></div>

          {/* OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={styles.outerRing}
          />

          {/* INNER RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={styles.innerRing}
          />

          {/* LOCK */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={styles.lockContainer}
          >
            <div style={styles.lockTop}></div>
            <div style={styles.lockBody}></div>
          </motion.div>

          {/* SPOTLIGHT */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={styles.spotlight}
          />

        </div>

      </motion.div>

      {modalType && (
  <AuthModal
    type={modalType}
    setType={setModalType}
    onClose={() => setModalType(null)}
    onSuccess={(userData) => {
  setModalType(null);
  setUser(userData);
}}
  />
)}
    </div>
  );
}

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px 40px",
    background: "rgba(15,23,42,0.95)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    zIndex: 10
  },

  topLeftText: {
    fontSize: "14px",
    opacity: 0.8
  },

  menuGroup: {
    display: "flex",
    gap: "20px"
  },

  menuItem: {
    cursor: "pointer"
  },

  card: {
    width: "70%",
    maxWidth: "900px",
    height: "380px",
    background: "rgba(30,41,59,0.9)",
    borderRadius: "20px",
    display: "flex",
    padding: "30px",
    boxShadow: "0 0 40px rgba(59,130,246,0.3)"
  },

  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  title: {
    fontSize: "46px",
    marginBottom: "15px",
    textShadow: "0 0 20px rgba(59,130,246,0.8)"
  },

  description: {
    fontSize: "17px",
    lineHeight: "1.7",
    opacity: 0.9,
    marginBottom: "30px",
    maxWidth: "420px"
  },

  buttonRow: {
    display: "flex",
    gap: "20px"
  },

  login: {
    padding: "12px 28px",
    background: "linear-gradient(90deg,#3b82f6,#9333ea)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 15px rgba(59,130,246,0.6)"
  },

  signup: {
    padding: "12px 28px",
    border: "2px solid #3b82f6",
    borderRadius: "8px",
    background: "transparent",
    color: "white",
    cursor: "pointer"
  },

  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },

  glow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent)",
    borderRadius: "50%",
    filter: "blur(50px)"
  },

  outerRing: {
    position: "absolute",
    width: "220px",
    height: "220px",
    border: "2px solid rgba(59,130,246,0.4)",
    borderRadius: "50%"
  },

  innerRing: {
    position: "absolute",
    width: "160px",
    height: "160px",
    border: "2px dashed rgba(147,51,234,0.5)",
    borderRadius: "50%"
  },

  spotlight: {
    position: "absolute",
    width: "120px",
    height: "120px",
    background: "radial-gradient(circle, rgba(59,130,246,0.6), transparent)",
    borderRadius: "50%",
    filter: "blur(20px)"
  },

  lockContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  lockTop: {
    width: "40px",
    height: "40px",
    border: "4px solid #3b82f6",
    borderBottom: "none",
    borderRadius: "20px 20px 0 0"
  },

  lockBody: {
    width: "70px",
    height: "50px",
    background: "linear-gradient(135deg,#3b82f6,#9333ea)",
    borderRadius: "10px",
    marginTop: "-5px",
    boxShadow: "0 0 20px rgba(59,130,246,0.7)"
  }
};
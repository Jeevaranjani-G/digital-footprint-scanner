import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Auth() {
  const [modal, setModal] = useState(null);

  return (
    <div style={styles.page}>

      {/* TOP CORNER MENU */}
      <div style={styles.nav}>
        <span>Home</span>
        <span>Features</span>
        <span>About</span>
        <span>Q&A</span>
      </div>

      {/* MAIN SECTION */}
      <div style={styles.container}>

        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          style={styles.left}
        >

          <h1 style={styles.title}>FootprintX</h1>

          <p style={styles.subtitle}>
            Analyze your digital footprint and understand how your identity
            is exposed across the internet.
          </p>

          {/* BUTTON BOXES */}
          <div style={styles.boxRow}>

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setModal("login")}
              style={styles.box}
            >
              Login
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setModal("signup")}
              style={styles.box}
            >
              Sign Up
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          style={styles.right}
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            style={styles.image}
          />
        </motion.div>

      </div>

      {/* MODALS */}
      <AnimatePresence>

        {modal === "login" && (
          <Modal title="Login" onClose={() => setModal(null)}>
            <input placeholder="Email" style={styles.input} />
            <input placeholder="Password" type="password" style={styles.input} />
            <button style={styles.button}>Login</button>
          </Modal>
        )}

        {modal === "signup" && (
          <Modal title="Sign Up" onClose={() => setModal(null)}>
            <input placeholder="Name" style={styles.input} />
            <input placeholder="Email" style={styles.input} />
            <input placeholder="Password" type="password" style={styles.input} />
            <button style={styles.button}>Create Account</button>
          </Modal>
        )}

      </AnimatePresence>
    </div>
  );
}

/* MODAL */
function Modal({ children, title, onClose }) {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        style={styles.modal}
      >
        <h2>{title}</h2>
        {children}
      </motion.div>
    </div>
  );
}

/* STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    overflow: "hidden"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 60px",
    opacity: 0.8
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px"
  },

  left: {
    flex: 1
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },

  title: {
    fontSize: "50px"
  },

  subtitle: {
    maxWidth: "400px",
    opacity: 0.8,
    marginBottom: "30px"
  },

  boxRow: {
    display: "flex",
    gap: "20px"
  },

  box: {
    padding: "15px 30px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "10px",
    cursor: "pointer",
    backdropFilter: "blur(10px)"
  },

  image: {
    width: "80%",
    borderRadius: "20px"
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  modal: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "15px",
    width: "300px",
    backdropFilter: "blur(15px)"
  },

  input: {
    width: "100%",
    margin: "8px 0",
    padding: "10px",
    borderRadius: "8px",
    border: "none"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#3b82f6",
    border: "none",
    color: "white",
    borderRadius: "8px"
  }
};


import React from "react";


export default function About() {

    

  const features = [
    "Smart Footprint Scanning",
    "Cybersecurity Analytics",
    "Digital Exposure Detection",
    "Security Intelligence Reports",
    "AI-Powered Insights",
    "Privacy Risk Monitoring",
  ];

  const roadmap = [
    "AI Threat Prediction Engine",
    "Dark Web Monitoring",
    "Live Breach Alerts",
    "PDF Intelligence Reports",
    "Cross-Platform Monitoring",
    "Mobile Application Launch",
  ];

  return (

    <div style={styles.container}>

      {/* GLOW BACKGROUND */}

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* HERO */}

      <section style={styles.heroSection}>

        <h1 style={styles.title}>
          FootprintX
        </h1>

        <h2 style={styles.subtitle}>
          Cyber Intelligence & Digital
          Footprint Protection Platform
        </h2>

        <p style={styles.description}>
          FootprintX is a modern cybersecurity
          intelligence platform designed to help
          users understand, monitor, and protect
          their digital presence across online
          platforms. The system analyzes publicly
          exposed information, identifies potential
          risks, and provides intelligent security
          recommendations to improve online safety.
        </p>

      </section>

      {/* WHAT IS */}

      <section style={styles.sectionCard}>

        <h2 style={styles.sectionTitle}>
          🔍 What is FootprintX?
        </h2>

        <p style={styles.sectionText}>
          In today's digital world, personal
          information is constantly exposed through
          social media platforms, online accounts,
          and public databases. FootprintX helps
          users discover their digital footprint,
          detect exposure risks, analyze security
          weaknesses, and improve their overall
          cybersecurity awareness using advanced
          scanning and reporting systems.
        </p>

      </section>

      {/* FEATURES */}

      <section style={styles.sectionCard}>

        <h2 style={styles.sectionTitle}>
          🚀 Core Features
        </h2>

        <div style={styles.featureGrid}>

          {features.map((feature, index) => (

            <div key={index} style={styles.featureCard}>
              {feature}
            </div>

          ))}

        </div>

      </section>

      {/* WHY IT MATTERS */}

      <section style={styles.sectionCard}>

        <h2 style={styles.sectionTitle}>
          ⚠ Why FootprintX Matters
        </h2>

        <p style={styles.sectionText}>
          Cyber threats, phishing attacks, password
          leaks, identity exposure, and public data
          breaches are increasing rapidly across
          digital platforms. Many users remain
          unaware of how much personal information
          is publicly accessible online. FootprintX
          aims to increase cybersecurity awareness
          and help users take preventive action
          before threats exploit their digital
          identity.
        </p>

      </section>

      {/* TECH STACK */}

      <section style={styles.sectionCard}>

        <h2 style={styles.sectionTitle}>
          💻 Technology Stack
        </h2>

        <div style={styles.techGrid}>

          <div style={styles.techCard}>
            <h3>Frontend</h3>

            <p>
              React.js<br />
              Vite<br />
              Modern CSS
            </p>
          </div>

          <div style={styles.techCard}>
            <h3>Backend</h3>

            <p>
              Node.js<br />
              Express.js<br />
              REST APIs
            </p>
          </div>

          <div style={styles.techCard}>
            <h3>Database</h3>

            <p>
              MongoDB<br />
              Cloud Storage
            </p>
          </div>

          <div style={styles.techCard}>
            <h3>Security</h3>

            <p>
              Threat Intelligence APIs<br />
              Exposure Detection<br />
              Risk Analysis
            </p>
          </div>

        </div>

      </section>

      {/* ROADMAP */}

      <section style={styles.sectionCard}>

        <h2 style={styles.sectionTitle}>
          🛣 Future Roadmap
        </h2>

        <div style={styles.roadmapGrid}>

          {roadmap.map((item, index) => (

            <div key={index} style={styles.roadmapCard}>
              {item}
            </div>

          ))}

        </div>

      </section>

      {/* DEVELOPERS */}

      <section style={styles.sectionCard}>

        <h2 style={styles.sectionTitle}>
          👨‍💻 Development Team
        </h2>

        <div style={styles.devGrid}>

          <div style={styles.devCard}>

            <div style={styles.avatar}>
              J
            </div>

            <h3>Jeevaranjani G</h3>

            <p>Frontend Developer</p>

          </div>

          <div style={styles.devCard}>

            <div style={styles.avatar}>
              A
            </div>

            <h3>Agasthiya S</h3>

            <p>Backend Developer</p>

          </div>

        </div>

      </section>

      {/* FINAL QUOTE */}

      <section style={styles.quoteSection}>

        <h2 style={styles.quote}>
          “Your digital footprint tells a story.
          Protect it before attackers read it.”
        </h2>

      </section>

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {

  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "40px",
    background:
      "linear-gradient(135deg,#081120,#111c44)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },

  glow1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(59,130,246,0.15)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
  },

  glow2: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(147,51,234,0.15)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
  },

  heroSection: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    marginBottom: "70px",
  },

  title: {
    fontSize: "70px",
    fontWeight: "bold",
    textShadow:
      "0 0 30px rgba(59,130,246,0.45)",
  },

  subtitle: {
    marginTop: "20px",
    fontSize: "28px",
    color: "#60a5fa",
  },

  description: {
    maxWidth: "850px",
    margin: "30px auto",
    lineHeight: "1.9",
    opacity: 0.88,
    fontSize: "18px",
  },

  sectionCard: {
    background: "rgba(30,41,59,0.92)",
    padding: "35px",
    borderRadius: "30px",
    marginBottom: "35px",
    boxShadow:
      "0 0 30px rgba(0,0,0,0.25)",
    position: "relative",
    zIndex: 2,
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "25px",
  },

  sectionText: {
    lineHeight: "2",
    opacity: 0.88,
    fontSize: "17px",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "22px",
  },

  featureCard: {
    background: "#0f172a",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow:
      "0 0 20px rgba(59,130,246,0.15)",
    transition: "0.3s",
  },

  techGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "22px",
  },

  techCard: {
    background: "#0f172a",
    padding: "28px",
    borderRadius: "22px",
    lineHeight: "1.9",
  },

  roadmapGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "22px",
  },

  roadmapCard: {
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
    padding: "22px",
    borderRadius: "20px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow:
      "0 0 25px rgba(59,130,246,0.3)",
  },

  devGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
  },

  devCard: {
    background: "#0f172a",
    padding: "35px",
    borderRadius: "24px",
    textAlign: "center",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "38px",
    fontWeight: "bold",
    margin: "0 auto 20px auto",
  },

  quoteSection: {
    textAlign: "center",
    marginTop: "80px",
    marginBottom: "60px",
    position: "relative",
    zIndex: 2,
  },

  quote: {
    fontSize: "34px",
    lineHeight: "1.7",
    maxWidth: "900px",
    margin: "auto",
    color: "#c4b5fd",
  },
};
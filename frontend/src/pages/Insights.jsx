import React from "react";

export default function Insights() {

    

  const breachedApps = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "Discord",
    "Telegram",
    "Twitter/X",
    "Snapchat",
    "GitHub",
  ];

  const recommendations = [
    "Enable Two-Factor Authentication (2FA) on all major accounts.",
    "Avoid reusing the same password across multiple platforms.",
    "Remove unused or inactive social media accounts.",
    "Use a password manager to generate strong passwords.",
    "Keep your email visibility private whenever possible.",
    "Avoid clicking unknown login or phishing links.",
  ];

  const threats = [
    {
      title: "Phishing Attacks",
      desc: "Fake login pages designed to steal usernames and passwords."
    },
    {
      title: "Credential Stuffing",
      desc: "Hackers reuse leaked passwords across multiple platforms."
    },
    {
      title: "Data Scraping",
      desc: "Public profile information collected automatically by bots."
    },
    {
      title: "Identity Exposure",
      desc: "Sensitive user information exposed through weak privacy settings."
    },
  ];

  const tips = [
    "Use unique passwords for every account.",
    "Enable biometric or MFA login whenever available.",
    "Regularly review connected third-party applications.",
    "Never share OTPs or verification codes.",
  ];

  return (

    <div style={styles.container}>

      {/* GLOW EFFECTS */}

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* TITLE */}

      <h1 style={styles.title}>
        🧠 Cybersecurity Insights
      </h1>

      <p style={styles.subtitle}>
        Stay informed with smart recommendations,
        cyber awareness tips, and exposure trends
        across modern digital platforms.
      </p>

      {/* BREACHED APPS */}

      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          🚨 Most Targeted Platforms
        </h2>

        <div style={styles.platformGrid}>

          {breachedApps.map((app, index) => (

            <div key={index} style={styles.platformCard}>
              {app}
            </div>

          ))}

        </div>

      </section>

      {/* RECOMMENDATIONS */}

      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          🔐 Smart Security Recommendations
        </h2>

        <div style={styles.cardGrid}>

          {recommendations.map((item, index) => (

            <div key={index} style={styles.infoCard}>
              <h3 style={styles.cardIcon}>✔</h3>

              <p style={styles.cardText}>
                {item}
              </p>
            </div>

          ))}

        </div>

      </section>

      {/* CYBER THREATS */}

      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          ⚠ Trending Cyber Threats
        </h2>

        <div style={styles.cardGrid}>

          {threats.map((item, index) => (

            <div key={index} style={styles.infoCard}>

              <h3 style={styles.threatTitle}>
                {item.title}
              </h3>

              <p style={styles.cardText}>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SECURITY TIPS */}

      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          💡 Best Security Practices
        </h2>

        <div style={styles.tipsBox}>

          {tips.map((tip, index) => (

            <div key={index} style={styles.tipItem}>
              🔹 {tip}
            </div>

          ))}

        </div>

      </section>

      {/* DID YOU KNOW */}

      <section style={styles.section}>

        <div style={styles.factCard}>

          <h2 style={styles.factTitle}>
            📌 Did You Know?
          </h2>

          <p style={styles.factText}>
            Over 80% of cybersecurity breaches happen
            due to weak or reused passwords across
            multiple online accounts.
          </p>

        </div>

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
    width: "450px",
    height: "450px",
    background: "rgba(59,130,246,0.15)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
  },

  glow2: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "rgba(147,51,234,0.15)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
  },

  title: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "15px",
    position: "relative",
    zIndex: 2,
    textShadow:
      "0 0 20px rgba(59,130,246,0.5)",
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.7",
    marginBottom: "60px",
    position: "relative",
    zIndex: 2,
  },

  section: {
    marginBottom: "60px",
    position: "relative",
    zIndex: 2,
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "25px",
  },

  platformGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(180px,1fr))",
    gap: "20px",
  },

  platformCard: {
    background: "rgba(30,41,59,0.92)",
    padding: "20px",
    borderRadius: "18px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow:
      "0 0 20px rgba(59,130,246,0.15)",
    transition: "0.3s",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "25px",
  },

  infoCard: {
    background: "rgba(30,41,59,0.92)",
    padding: "25px",
    borderRadius: "22px",
    boxShadow:
      "0 0 25px rgba(0,0,0,0.25)",
    transition: "0.3s",
  },

  cardIcon: {
    fontSize: "28px",
    marginBottom: "15px",
    color: "#3b82f6",
  },

  cardText: {
    opacity: 0.85,
    lineHeight: "1.8",
  },

  threatTitle: {
    marginBottom: "12px",
    color: "#60a5fa",
  },

  tipsBox: {
    background: "rgba(30,41,59,0.92)",
    padding: "30px",
    borderRadius: "24px",
    boxShadow:
      "0 0 25px rgba(0,0,0,0.25)",
  },

  tipItem: {
    marginBottom: "18px",
    fontSize: "17px",
    opacity: 0.9,
  },

  factCard: {
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
    padding: "35px",
    borderRadius: "28px",
    textAlign: "center",
    boxShadow:
      "0 0 35px rgba(59,130,246,0.35)",
  },

  factTitle: {
    marginBottom: "15px",
    fontSize: "30px",
  },

  factText: {
    lineHeight: "1.8",
    fontSize: "18px",
    opacity: 0.95,
  },
};
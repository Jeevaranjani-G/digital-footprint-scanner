import { useState } from "react";


export default function ScanPage({ history, setHistory }) {

  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [saved, setSaved] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  /* ================= SCAN ================= */

  const handleScan = () => {

    if (!query.trim()) {
      alert("Please enter username or email");
      return;
    }

    const randomScore = Math.floor(Math.random() * 100);

    const risk =
      randomScore > 70
        ? "High"
        : randomScore > 40
        ? "Medium"
        : "Low";

    const safe = Math.floor(Math.random() * 40) + 30;

    const exposed = Math.floor(Math.random() * 30) + 20;

    const risky = 100 - safe - exposed;

    const generatedResult = {

      securityScore: randomScore,

      riskLevel: risk,

      safePercent: safe,

      exposedPercent: exposed,

      riskyPercent: risky,

      breaches: Math.floor(Math.random() * 5) + 1,

      recommendations: [
        "Enable 2FA",
        "Change reused usernames",
        "Remove exposed profiles",
      ],

      platforms: [
        "Instagram",
        "LinkedIn",
        "GitHub",
        "Twitter",
        "Discord",
      ],

      similarUsernames: [
        `${query}_official`,
        `${query}_123`,
        `real_${query}`,
        `${query}_dev`,
        `${query}.xyz`,
      ],

      platformExposure: [
        {
          name: "Instagram",
          value: Math.floor(Math.random() * 100),
        },

        {
          name: "GitHub",
          value: Math.floor(Math.random() * 100),
        },

        {
          name: "LinkedIn",
          value: Math.floor(Math.random() * 100),
        },
      ],
    };

    setScanResult(generatedResult);

    setSearched(true);
  };

  /* ================= SAVE ================= */

  const handleSave = () => {

    if (!scanResult) {
      alert("Please scan first");
      return;
    }

    const now = new Date();

    const newHistory = {

      id: Date.now(),

      username: query,

      date: now.toLocaleDateString(),

      time: now.toLocaleTimeString(),

      securityScore: scanResult.securityScore,

      riskLevel: scanResult.riskLevel,

      safePercent: scanResult.safePercent,

      exposedPercent: scanResult.exposedPercent,

      riskyPercent: scanResult.riskyPercent,

      breaches: scanResult.breaches,

      recommendations: scanResult.recommendations,

      platforms: scanResult.platforms,

      similarUsernames: scanResult.similarUsernames,

      platformExposure: scanResult.platformExposure,
    };

    setHistory([newHistory, ...history]);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (

    <div style={styles.pageWrapper}>

      {/* BACKGROUND GLOW */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* SEARCH SECTION */}
      <div
        style={{
          ...styles.searchSection,
          marginTop: searched ? "20px" : "140px",
        }}
      >

        {!searched && (
          <h1 style={styles.title}>
            Scan Your Digital Footprint
          </h1>
        )}

        <div style={styles.searchRow}>

          {/* SAVE BUTTON */}
          <button
            style={styles.saveBtn}
            onClick={handleSave}
          >
            🕘
          </button>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Enter username or email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.input}
          />

          {/* SCAN BUTTON */}
          <button
            type="button"
            style={styles.scanBtn}
            onClick={handleScan}
          >
            Scan
          </button>

        </div>

        {saved && (
          <p style={styles.savedText}>
            ✅ Saved to Scan History
          </p>
        )}

      </div>

      {/* RESULTS */}

      {searched && scanResult && (

        <>

          <h1 style={styles.resultTitle}>
            Results for "{query}"
          </h1>

          <div style={styles.grid}>

            {/* EXPOSURE ANALYSIS */}

            <div style={styles.card}>

              <h2 style={styles.cardTitle}>
                Exposure Analysis
              </h2>

              <div style={styles.pieWrapper}>

                <div
                  style={{
                    ...styles.pieChart,

                    background: `conic-gradient(
                      #3b82f6 0% ${scanResult.safePercent}%,
                      #9333ea ${scanResult.safePercent}% ${
                        scanResult.safePercent +
                        scanResult.exposedPercent
                      }%,
                      #ef4444 ${
                        scanResult.safePercent +
                        scanResult.exposedPercent
                      }% 100%
                    )`,
                  }}
                ></div>

                <div style={styles.legend}>

                  <div style={styles.legendItem}>
                    <span
                      style={{
                        ...styles.legendColor,
                        background: "#3b82f6",
                      }}
                    ></span>

                    Safe - {scanResult.safePercent}%
                  </div>

                  <div style={styles.legendItem}>
                    <span
                      style={{
                        ...styles.legendColor,
                        background: "#9333ea",
                      }}
                    ></span>

                    Medium - {scanResult.exposedPercent}%
                  </div>

                  <div style={styles.legendItem}>
                    <span
                      style={{
                        ...styles.legendColor,
                        background: "#ef4444",
                      }}
                    ></span>

                    Risk - {scanResult.riskyPercent}%
                  </div>

                </div>

              </div>

            </div>

            {/* RISK ASSESSMENT */}

            <div style={styles.card}>

              <h2 style={styles.cardTitle}>
                Risk Assessment
              </h2>

              <div style={styles.riskScore}>
                {scanResult.securityScore}
                <span>/100</span>
              </div>

              <h3
                style={{
                  ...styles.highRisk,

                  color:
                    scanResult.riskLevel === "High"
                      ? "#ef4444"
                      : scanResult.riskLevel === "Medium"
                      ? "#f59e0b"
                      : "#22c55e",
                }}
              >
                {scanResult.riskLevel} RISK
              </h3>

              <p style={styles.cardText}>
                Your username appears across multiple
                public platforms and may be vulnerable
                to impersonation or exposure.
              </p>

              <div style={styles.recommendationBox}>
                <strong>✅ Recommendation:</strong>
                <br />
                {scanResult.recommendations.join(", ")}
              </div>

            </div>

            {/* DETECTED PLATFORMS */}

            <div style={styles.card}>

              <h2 style={styles.cardTitle}>
                Detected Platforms
              </h2>

              <div style={styles.platformList}>

                {scanResult.platforms.map((platform, i) => (

                  <div
                    key={i}
                    style={styles.platform}
                  >
                    {platform}
                  </div>

                ))}

              </div>

            </div>

            {/* BREACH DETECTION */}

            <div style={styles.card}>

              <h2 style={styles.cardTitle}>
                Breach Detection
              </h2>

              <div style={styles.breachBox}>

                <h3 style={{ color: "#ef4444" }}>
                  {scanResult.breaches} Breaches Found
                </h3>

                <ul style={styles.breachList}>
                  <li>LinkedIn Data Leak</li>
                  <li>Discord Public Exposure</li>
                  <li>GitHub Metadata Exposure</li>
                </ul>

              </div>

            </div>

            {/* SIMILAR USERNAMES */}

            <div style={styles.card}>

              <h2 style={styles.cardTitle}>
                Similar Usernames
              </h2>

              <div style={styles.usernameGrid}>

                {scanResult.similarUsernames.map((user, i) => (

                  <div
                    key={i}
                    style={styles.usernameTag}
                  >
                    @{user}
                  </div>

                ))}

              </div>

            </div>

            {/* PLATFORM EXPOSURE */}

            <div style={styles.card}>

              <h2 style={styles.cardTitle}>
                Platform Exposure
              </h2>

              <div style={styles.barChart}>

                {scanResult.platformExposure.map(
                  (item, i) => (

                    <div
                      key={i}
                      style={styles.barItem}
                    >

                      <p>{item.name}</p>

                      <div style={styles.barBg}>

                        <div
                          style={{
                            ...styles.barFill,
                            width: `${item.value}%`,
                          }}
                        ></div>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </>

      )}

    </div>
  );
}

const styles = {

  pageWrapper: {
    width: "100%",
    minHeight: "100vh",
    padding: "40px",
    color: "white",
    position: "relative",
    overflowY: "auto",
    overflowX: "hidden",
    background: "linear-gradient(135deg,#081120,#111c44)",
  },

  glow1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(59,130,246,0.15)",
    filter: "blur(120px)",
    top: "0px",
    left: "100px",
    pointerEvents: "none",
  },

  glow2: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(147,51,234,0.18)",
    filter: "blur(120px)",
    bottom: "0px",
    right: "100px",
    pointerEvents: "none",
  },

  searchSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "0.4s",
    zIndex: 10,
    position: "relative",
  },

  title: {
    fontSize: "36px",
    marginBottom: "40px",
    textShadow: "0 0 20px rgba(59,130,246,0.7)",
  },

  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  saveBtn: {
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    border: "none",
    background: "#1e293b",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(59,130,246,0.5)",
  },

  input: {
    width: "420px",
    padding: "18px 22px",
    borderRadius: "15px",
    border: "none",
    outline: "none",
    background: "#1e293b",
    color: "white",
    fontSize: "16px",
    boxShadow: "0 0 20px rgba(59,130,246,0.4)",
  },

  scanBtn: {
    padding: "18px 35px",
    borderRadius: "15px",
    border: "none",
    background: "linear-gradient(90deg,#3b82f6,#9333ea)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(59,130,246,0.6)",
  },

  savedText: {
    marginTop: "15px",
    color: "#4ade80",
  },

  resultTitle: {
    textAlign: "center",
    marginTop: "40px",
    marginBottom: "40px",
    fontSize: "38px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(450px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(30,41,59,0.9)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
  },

  cardTitle: {
    fontSize: "24px",
    marginBottom: "25px",
  },

  pieWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  pieChart: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    boxShadow: "0 0 25px rgba(59,130,246,0.5)",
  },

  legend: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontSize: "24px",
  },

  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  legendColor: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  },

  riskScore: {
    fontSize: "60px",
    color: "#ef4444",
    fontWeight: "bold",
  },

  highRisk: {
    fontSize: "26px",
    marginTop: "10px",
  },

  cardText: {
    marginTop: "20px",
    lineHeight: "1.8",
    opacity: 0.85,
    fontSize: "20px",
  },

  recommendationBox: {
    marginTop: "25px",
    background: "#091224",
    padding: "20px",
    borderRadius: "16px",
    fontSize: "20px",
  },

  platformList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },

  platform: {
    padding: "14px 22px",
    background: "#091224",
    borderRadius: "16px",
    fontSize: "20px",
  },

  breachBox: {
    background: "rgba(239,68,68,0.15)",
    padding: "20px",
    borderRadius: "18px",
  },

  breachList: {
    marginTop: "20px",
    lineHeight: "2",
    fontSize: "20px",
  },

  usernameGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },

  usernameTag: {
    padding: "14px 18px",
    borderRadius: "14px",
    background: "#091224",
    fontSize: "15px",
  },

  barChart: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  barItem: {
    fontSize: "20px",
  },

  barBg: {
    width: "100%",
    height: "18px",
    background: "#091224",
    borderRadius: "20px",
    marginTop: "10px",
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    borderRadius: "20px",
    background:
      "linear-gradient(90deg,#3b82f6,#9333ea)",
  },
};
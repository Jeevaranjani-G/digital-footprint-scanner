import { useState } from "react";


export default function History({ history = [], setHistory }) {

  const [selectedScan, setSelectedScan] = useState(null);
  
  /* ================= SAFETY CHECK ================= */

  if (!Array.isArray(history)) {
    return (
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        No History Found
      </h1>
    );
  }

  /* ================= GROUP HISTORY ================= */

  const groupedHistory = {};

  history.forEach((item) => {

    if (!item) return;

    const safeDate = item.date || new Date().toISOString();

    const date = new Date(safeDate);

    const monthYear = isNaN(date)
      ? "Unknown"
      : date.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });

    if (!groupedHistory[monthYear]) {
      groupedHistory[monthYear] = [];
    }

    groupedHistory[monthYear].push(item);
  });

  /* ================= DETAIL VIEW ================= */

  if (selectedScan) {

    return (

      <div style={styles.modalOverlay}>

        <div style={styles.modalContent}>

          {/* CLOSE BUTTON */}

          <button
            style={styles.closeBtn}
            onClick={() => setSelectedScan(null)}
          >
            ✕
          </button>

          {/* TITLE */}

          <h1 style={styles.detailTitle}>
            🔍 Scan Report for @{selectedScan.username || "Unknown"}
          </h1>

          {/* TOP CARDS */}

          <div style={styles.detailGrid}>

            <div style={styles.detailCard}>
              <h3>🔒 Security Score</h3>
              <h1>{selectedScan.securityScore || 0}/100</h1>
            </div>

            <div style={styles.detailCard}>
              <h3>⚠️ Risk Level</h3>
              <h1>{selectedScan.riskLevel || "Low"}</h1>
            </div>

            <div style={styles.detailCard}>
              <h3>🚨 Breaches Found</h3>
              <h1>{selectedScan.breaches || 0}</h1>
            </div>

            <div style={styles.detailCard}>
              <h3>📈 Exposure Risk</h3>
              <h1>{selectedScan.exposedPercent || 0}%</h1>
            </div>

          </div>

          {/* PIE CHART */}

          <div style={styles.bigCard}>

            <h2>📊 Exposure Analysis</h2>

            <div
              style={{
                ...styles.fakeChart,

                background: `conic-gradient(
                  #3b82f6 0% ${selectedScan.safePercent || 40}%,
                  #9333ea ${selectedScan.safePercent || 40}% ${
                    (selectedScan.safePercent || 40) +
                    (selectedScan.exposedPercent || 35)
                  }%,
                  #ef4444 ${
                    (selectedScan.safePercent || 40) +
                    (selectedScan.exposedPercent || 35)
                  }% 100%
                )`,
              }}
            ></div>

            {/* LABELS */}

            <div style={styles.chartLabels}>

              <div style={styles.labelRow}>
                <div
                  style={{
                    ...styles.labelDot,
                    background: "#3b82f6",
                  }}
                ></div>

                <span>
                  Safe - {selectedScan.safePercent || 40}%
                </span>
              </div>

              <div style={styles.labelRow}>
                <div
                  style={{
                    ...styles.labelDot,
                    background: "#9333ea",
                  }}
                ></div>

                <span>
                  Medium - {selectedScan.exposedPercent || 35}%
                </span>
              </div>

              <div style={styles.labelRow}>
                <div
                  style={{
                    ...styles.labelDot,
                    background: "#ef4444",
                  }}
                ></div>

                <span>
                  Risk - {selectedScan.riskyPercent || 25}%
                </span>
              </div>

            </div>

          </div>

          {/* PLATFORM EXPOSURE */}

          <div style={styles.bigCard}>

            <h2>📉 Platform Exposure</h2>

            <div style={styles.barContainer}>

              {(selectedScan.platformExposure || []).map((platform, i) => (

                <div key={i} style={styles.barItem}>

                  <p>{platform.name}</p>

                  <div style={styles.barBg}>

                    <div
                      style={{
                        ...styles.barFill,
                        width: `${platform.value}%`,
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* DETECTED PLATFORMS */}

          <div style={styles.bigCard}>

            <h2>🌐 Detected Platforms</h2>

            <div style={styles.platformRow}>

              {(selectedScan.platforms || []).map((platform, i) => (

                <span key={i} style={styles.platform}>
                  {platform}
                </span>

              ))}

            </div>

          </div>

          {/* SIMILAR USERS */}

          <div style={styles.bigCard}>

            <h2>👥 Similar Usernames Found</h2>

            <div style={styles.platformRow}>

              {(selectedScan.similarUsernames || []).map((user, i) => (

                <span key={i} style={styles.platform}>
                  @{user}
                </span>

              ))}

            </div>

          </div>

          {/* RECOMMENDATION */}

          <div style={styles.bigCard}>

            <h2>💡 Recommendations</h2>

            <div style={styles.recommendationBox}>

              {(selectedScan.recommendations || []).map((rec, i) => (

                <p key={i} style={styles.recommendation}>
                  ✅ {rec}
                </p>

              ))}

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ================= MAIN HISTORY ================= */

  return (

    <div style={styles.container}>

      <h1 style={styles.title}>
        🕘 Scan History
      </h1>

      {history.length === 0 && (

        <div style={styles.emptyBox}>
          No scan history saved yet.
        </div>

      )}

      {Object.keys(groupedHistory).map((month) => (

        <div key={month} style={styles.monthSection}>

          <h2 style={styles.monthTitle}>
            {month}
          </h2>

          <div style={styles.cards}>

            {groupedHistory[month].map((item, index) => (

              <div
                key={index}
                style={styles.card}
                onClick={() => setSelectedScan(item)}
              >

                {/* DELETE BUTTON */}

                <button
                  style={styles.deleteBtn}
                  onClick={(e) => {

                    e.stopPropagation();

                    const updatedHistory = history.filter(
                      (scan) => scan.id !== item.id
                    );

                    setHistory(updatedHistory);
                  }}
                >
                  🗑
                </button>

                {/* TOP ROW */}

                <div style={styles.topRow}>

                  <h3 style={styles.username}>
                    @{item.username || "Unknown"}
                  </h3>

                  <div
                    style={{
                      ...styles.riskBadge,

                      background:
                        item.riskLevel === "High"
                          ? "#c06161"
                          : item.riskLevel === "Medium"
                          ? "#f59e0b"
                          : "#22c55e",
                    }}
                  >
                    {item.riskLevel || "Low"}
                  </div>

                </div>

                <p style={styles.info}>
                  📅 {item.date || "No Date"}
                </p>

                <p style={styles.info}>
                  ⏰ {item.time || "No Time"}
                </p>

                <p style={styles.info}>
                  🔒 Security Score: {item.securityScore || 0}/100
                </p>

                {/* PLATFORMS */}

                <div style={styles.platformRow}>

                  {(item.platforms || []).map((platform, i) => (

                    <span key={i} style={styles.platform}>
                      {platform}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {

  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "40px",
    color: "white",
  },

  title: {
    fontSize: "42px",
    marginBottom: "35px",
    textAlign: "center",
    textShadow: "0 0 20px rgba(59,130,246,0.5)",
  },

  emptyBox: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "16px",
    textAlign: "center",
    opacity: 0.7,
  },

  monthSection: {
    marginBottom: "45px",
  },

  monthTitle: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#60a5fa",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "20px",
  },

  card: {
    position: "relative",
    background: "rgba(30,41,59,0.95)",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 0 20px rgba(0,0,0,0.25)",
    cursor: "pointer",
    transition: "0.3s",
  },

  deleteBtn: {
    position: "absolute",
    top: "45",
    right: "5px",
    background: "transparent",
    border: "none",
    color: "#ef4444",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },

  username: {
    fontSize: "24px",
  },

  riskBadge: {
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "white",
  },

  info: {
    marginTop: "10px",
    opacity: 0.85,
  },

  platformRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "18px",
  },

  platform: {
    background: "#334155",
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "13px",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.88)",
    backdropFilter: "blur(10px)",
    overflowY: "auto",
    padding: "40px",
    zIndex: 5000,
  },

  modalContent: {
    maxWidth: "1200px",
    margin: "auto",
    color: "white",
  },

  closeBtn: {
    position: "fixed",
    top: "25px",
    right: "30px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    background: "#ef4444",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  detailTitle: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "40px",
  },

  detailGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
  },

  detailCard: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(59,130,246,0.25)",
  },

  bigCard: {
    marginTop: "30px",
    background: "#1e293b",
    padding: "30px",
    borderRadius: "20px",
  },

  fakeChart: {
    width: "230px",
    height: "230px",
    borderRadius: "50%",
    margin: "30px auto",
    boxShadow: "0 0 30px rgba(59,130,246,0.4)",
  },

  chartLabels: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  labelDot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  },

  barContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginTop: "20px",
  },

  barItem: {
    fontSize: "18px",
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
    background: "linear-gradient(90deg,#3b82f6,#9333ea)",
  },

  recommendationBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  recommendation: {
    fontSize: "17px",
    opacity: 0.9,
  },

};
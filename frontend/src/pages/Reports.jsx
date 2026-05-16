import { useState } from "react";

export default function Reports({ history = [] }) {

  const [selectedReport, setSelectedReport] = useState(null);
  

  /* ================= TOTALS ================= */

  const totalReports = history.length;

  const highRiskReports = history.filter(
    (item) => item.riskLevel === "High"
  ).length;

  const avgScore =
    history.length > 0
      ? Math.floor(
          history.reduce(
            (acc, item) =>
              acc + (item.securityScore || 0),
            0
          ) / history.length
        )
      : 0;

  /* ================= MAIN ================= */

  return (

    <div style={styles.container}>

      {/* BACKGROUND GLOWS */}

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* TITLE */}

      <h1 style={styles.title}>
        📑 Security Intelligence Reports
      </h1>

      {/* TOP STATS */}

      <div style={styles.statsGrid}>

        <div style={styles.statCard}>
          <h3>Total Reports</h3>
          <h1>{totalReports}</h1>
        </div>

        <div style={styles.statCard}>
          <h3>High Risk Reports</h3>

          <h1 style={{ color: "#ef4444" }}>
            {highRiskReports}
          </h1>
        </div>

        <div style={styles.statCard}>
          <h3>Average Score</h3>

          <h1 style={{ color: "#3b82f6" }}>
            {avgScore}
          </h1>
        </div>

        <div style={styles.statCard}>
          <h3>Latest Scan</h3>

          <h1 style={{ fontSize: "22px" }}>
            {history[0]?.date || "N/A"}
          </h1>
        </div>

      </div>

      {/* EMPTY */}

      {history.length === 0 && (

        <div style={styles.emptyBox}>
          No reports generated yet.
        </div>

      )}

      {/* REPORTS */}

      <div style={styles.reportGrid}>

        {history.map((report, index) => (

          <div
            key={index}
            style={styles.reportCard}
          >

            {/* HEADER */}

            <div style={styles.reportTop}>

              <div>

                <h2 style={styles.username}>
                  @{report.username}
                </h2>

                <p style={styles.date}>
                  {report.date} • {report.time}
                </p>

              </div>

              <div
                style={{
                  ...styles.riskBadge,

                  background:
                    report.riskLevel === "High"
                      ? "#ef4444"
                      : report.riskLevel === "Medium"
                      ? "#f59e0b"
                      : "#22c55e",
                }}
              >
                {report.riskLevel}
              </div>

            </div>

            {/* SCORE */}

            <div style={styles.scoreSection}>

              <div style={styles.scoreCircle}>
                {report.securityScore}
              </div>

              <div>

                <h3>Security Score</h3>

                <p style={styles.scoreText}>
                  Exposure detected across multiple
                  digital platforms.
                </p>

              </div>

            </div>

            {/* DETAILS */}

            <div style={styles.detailRow}>
              <span>Breaches Found</span>
              <strong>{report.breaches}</strong>
            </div>

            <div style={styles.detailRow}>
              <span>Platforms Detected</span>
              <strong>
                {report.platforms?.length || 0}
              </strong>
            </div>

            {/* BUTTONS */}

            <div style={styles.buttonRow}>

              <button
                style={styles.viewBtn}
                onClick={() =>
                  setSelectedReport(report)
                }
              >
                View Report
              </button>

              <button
                style={styles.downloadBtn}
                onClick={() =>
                  alert(
                    "PDF export feature coming soon"
                  )
                }
              >
                Download
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}

      {selectedReport && (

        <div style={styles.modalOverlay}>

          <div style={styles.modalContent}>

            {/* CLOSE */}

            <button
              style={styles.closeBtn}
              onClick={() =>
                setSelectedReport(null)
              }
            >
              ✕
            </button>

            {/* TITLE */}

            <h1 style={styles.modalTitle}>
              🔍 Detailed Security Report
            </h1>

            {/* USER */}

            <h2 style={styles.modalUser}>
              @{selectedReport.username}
            </h2>

            {/* GRID */}

            <div style={styles.modalGrid}>

              <div style={styles.modalCard}>
                <h3>Security Score</h3>

                <h1>
                  {selectedReport.securityScore}/100
                </h1>
              </div>

              <div style={styles.modalCard}>
                <h3>Risk Level</h3>

                <h1>
                  {selectedReport.riskLevel}
                </h1>
              </div>

              <div style={styles.modalCard}>
                <h3>Breaches</h3>

                <h1>
                  {selectedReport.breaches}
                </h1>
              </div>

              <div style={styles.modalCard}>
                <h3>Platforms</h3>

                <h1>
                  {
                    selectedReport.platforms?.length
                  }
                </h1>
              </div>

            </div>

            {/* EXPOSURE */}

            <div style={styles.largeCard}>

              <h2>Exposure Analysis</h2>

              <div style={styles.exposureBar}>

                <div
                  style={{
                    ...styles.safeBar,
                    width: `${selectedReport.safePercent}%`,
                  }}
                ></div>

                <div
                  style={{
                    ...styles.mediumBar,
                    width: `${selectedReport.exposedPercent}%`,
                  }}
                ></div>

                <div
                  style={{
                    ...styles.riskBar,
                    width: `${selectedReport.riskyPercent}%`,
                  }}
                ></div>

              </div>

              <div style={styles.legendRow}>

                <span>
                  🔵 Safe:{" "}
                  {selectedReport.safePercent}%
                </span>

                <span>
                  🟣 Medium:{" "}
                  {selectedReport.exposedPercent}%
                </span>

                <span>
                  🔴 Risk:{" "}
                  {selectedReport.riskyPercent}%
                </span>

              </div>

            </div>

            {/* PLATFORMS */}

            <div style={styles.largeCard}>

              <h2>Detected Platforms</h2>

              <div style={styles.platformRow}>

                {selectedReport.platforms?.map(
                  (platform, i) => (

                    <div
                      key={i}
                      style={styles.platform}
                    >
                      {platform}
                    </div>

                  )
                )}

              </div>

            </div>

            {/* USERNAMES */}

            <div style={styles.largeCard}>

              <h2>Similar Usernames</h2>

              <div style={styles.platformRow}>

                {selectedReport.similarUsernames?.map(
                  (user, i) => (

                    <div
                      key={i}
                      style={styles.platform}
                    >
                      @{user}
                    </div>

                  )
                )}

              </div>

            </div>

            {/* RECOMMENDATIONS */}

            <div style={styles.largeCard}>

              <h2>Security Recommendations</h2>

              <ul style={styles.recommendationList}>

                {selectedReport.recommendations?.map(
                  (rec, i) => (

                    <li key={i}>{rec}</li>

                  )
                )}

              </ul>

            </div>

            {/* EXPORT BUTTONS */}

            <div style={styles.exportRow}>

              <button
                style={styles.exportBtn}
                onClick={() =>
                  window.print()
                }
              >
                🖨 Print Report
              </button>

              <button
                style={styles.exportBtn}
                onClick={() =>
                  alert(
                    "PDF Export Coming Soon"
                  )
                }
              >
                📥 Export PDF
              </button>

            </div>

          </div>

        </div>

      )}

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
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg,#081120,#111c44)",
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

  title: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "40px",
    position: "relative",
    zIndex: 2,
    textShadow:
      "0 0 20px rgba(59,130,246,0.5)",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "40px",
    position: "relative",
    zIndex: 2,
  },

  statCard: {
    background: "rgba(30,41,59,0.92)",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow:
      "0 0 25px rgba(0,0,0,0.25)",
  },

  emptyBox: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "18px",
    textAlign: "center",
  },

  reportGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(380px,1fr))",
    gap: "25px",
    position: "relative",
    zIndex: 2,
  },

  reportCard: {
    background: "rgba(30,41,59,0.92)",
    borderRadius: "24px",
    padding: "25px",
    boxShadow:
      "0 0 30px rgba(0,0,0,0.25)",
    transition: "0.3s",
  },

  reportTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  username: {
    fontSize: "28px",
  },

  date: {
    opacity: 0.7,
    marginTop: "8px",
  },

  riskBadge: {
    padding: "10px 18px",
    borderRadius: "999px",
    fontWeight: "bold",
    color: "white",
  },

  scoreSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "25px",
    marginBottom: "25px",
  },

  scoreCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    fontWeight: "bold",
    boxShadow:
      "0 0 20px rgba(59,130,246,0.4)",
  },

  scoreText: {
    opacity: 0.8,
    marginTop: "10px",
    lineHeight: "1.6",
  },

  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    opacity: 0.9,
  },

  buttonRow: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  },

  viewBtn: {
    flex: 1,
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background:
      "linear-gradient(90deg,#3b82f6,#9333ea)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  downloadBtn: {
    flex: 1,
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background: "#0f172a",
    color: "white",
    cursor: "pointer",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.88)",
    backdropFilter: "blur(10px)",
    zIndex: 9999,
    overflowY: "auto",
    padding: "40px",
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
  },

  modalTitle: {
    textAlign: "center",
    fontSize: "42px",
  },

  modalUser: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "40px",
    opacity: 0.8,
  },

  modalGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
  },

  modalCard: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "20px",
  },

  largeCard: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "22px",
    marginTop: "30px",
  },

  exposureBar: {
    width: "100%",
    height: "30px",
    display: "flex",
    borderRadius: "999px",
    overflow: "hidden",
    marginTop: "25px",
  },

  safeBar: {
    background: "#3b82f6",
  },

  mediumBar: {
    background: "#9333ea",
  },

  riskBar: {
    background: "#ef4444",
  },

  legendRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    flexWrap: "wrap",
    gap: "15px",
  },

  platformRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px",
  },

  platform: {
    background: "#0f172a",
    padding: "12px 18px",
    borderRadius: "14px",
  },

  recommendationList: {
    marginTop: "20px",
    lineHeight: "2",
  },

  exportRow: {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    marginBottom: "40px",
  },

  exportBtn: {
    flex: 1,
    padding: "18px",
    borderRadius: "16px",
    border: "none",
    background:
      "linear-gradient(90deg,#3b82f6,#9333ea)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  },
};
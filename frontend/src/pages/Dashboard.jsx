import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


export default function Dashboard({ history = [] }) {

  /* ================= EMPTY STATE ================= */

  if (history.length === 0) {

    return (

      <div style={styles.container}>

        <div style={styles.glow1}></div>
        <div style={styles.glow2}></div>

        <h1 style={styles.title}>
          🛡 Digital Security Intelligence
        </h1>

        <div style={styles.emptyCard}>

          <h2>No scan analytics available yet.</h2>

          <p style={styles.emptyText}>
            Start scanning usernames to generate
            security insights and exposure analytics.
          </p>

        </div>

      </div>
    );
  }

  /* ================= TOTALS ================= */

  const totalScans = history.length;

  const highRisk = history.filter(
    (item) => item.riskLevel === "High"
  ).length;

  const mediumRisk = history.filter(
    (item) => item.riskLevel === "Medium"
  ).length;

  const safeRisk = history.filter(
    (item) => item.riskLevel === "Low"
  ).length;

  /* ================= PIE CHART ================= */

  const pieData = [
    { name: "Safe", value: safeRisk },
    { name: "Medium", value: mediumRisk },
    { name: "High", value: highRisk },
  ];

  /* ================= PLATFORM DATA ================= */

  const platformCount = {};

  history.forEach((item) => {

    (item.platforms || []).forEach((platform) => {

      platformCount[platform] =
        (platformCount[platform] || 0) + 1;

    });

  });

  const platformData = Object.keys(platformCount).map((key) => ({
    platform: key,
    count: platformCount[key],
  }));

  /* ================= MONTHLY SCANS ================= */

  const monthlyMap = {};

  history.forEach((item) => {

    const safeDate = item.date || new Date();

    const month = new Date(safeDate).toLocaleString(
      "default",
      { month: "short" }
    );

    monthlyMap[month] =
      (monthlyMap[month] || 0) + 1;

  });

  const monthlyData = Object.keys(monthlyMap).map((key) => ({
    month: key,
    scans: monthlyMap[key],
  }));

  return (

    <div style={styles.container}>

      {/* BACKGROUND GLOW */}

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* TITLE */}

      <h1 style={styles.title}>
        🛡 Digital Security Intelligence
      </h1>

      {/* TOP CARDS */}

      <div style={styles.topCards}>

        <div style={styles.card}>
          <h3>Total Scans</h3>
          <h1>{totalScans}</h1>
        </div>

        <div style={styles.card}>
          <h3>High Risk</h3>

          <h1 style={{ color: "#ef4444" }}>
            {highRisk}
          </h1>
        </div>

        <div style={styles.card}>
          <h3>Medium Risk</h3>

          <h1 style={{ color: "#f59e0b" }}>
            {mediumRisk}
          </h1>
        </div>

        <div style={styles.card}>
          <h3>Safe Accounts</h3>

          <h1 style={{ color: "#22c55e" }}>
            {safeRisk}
          </h1>
        </div>

      </div>

      {/* CHART GRID */}

      <div style={styles.chartGrid}>

        {/* PIE CHART */}

        <div style={styles.chartCard}>

          <h2 style={styles.chartTitle}>
            Risk Distribution
          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >

                <Cell fill="#22c55e" />
                <Cell fill="#f59e0b" />
                <Cell fill="#ef4444" />

              </Pie>

              <Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "none",
    borderRadius: "12px",
    color: "white",
  }}

  itemStyle={{
    color: "white",
  }}

  cursor={{ fill: "transparent" }}
/>

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* MONTHLY CHART */}

        <div style={styles.chartCard}>

          <h2 style={styles.chartTitle}>
            Monthly Scan Activity
          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={monthlyData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.08)"
              />

              <XAxis
                dataKey="month"
                stroke="#94a3b8"
              />

              <YAxis stroke="#94a3b8" />

              <Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "none",
    borderRadius: "12px",
    color: "white",
  }}

  itemStyle={{
    color: "white",
  }}

  cursor={{ fill: "transparent" }}
/>

              <Bar
                dataKey="scans"
                fill="#3b82f6"
                radius={[12, 12, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* PLATFORM CHART */}

      <div style={styles.chartCard}>

        <h2 style={styles.chartTitle}>
          Most Detected Platforms
        </h2>

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={platformData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.08)"
            />

            <XAxis
              dataKey="platform"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "none",
    borderRadius: "12px",
    color: "white",
  }}

  itemStyle={{
    color: "white",
  }}

  cursor={{ fill: "transparent" }}
/>

            <Bar
              dataKey="count"
              fill="#9333ea"
              radius={[12, 12, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* RECENT SCANS */}

      <div style={styles.recentCard}>

        <h2 style={styles.chartTitle}>
          🕘 Recent Scans
        </h2>

        {history
          .slice()
          .reverse()
          .slice(0, 5)
          .map((item, index) => (

            <div key={index} style={styles.scanRow}>

              <div>

                <h3>
                  @{item.username}
                </h3>

                <p style={styles.scanDate}>
                  {item.date} • {item.time}
                </p>

              </div>

              <div
                style={{
                  ...styles.badge,

                  background:
                    item.riskLevel === "High"
                      ? "#ef4444"
                      : item.riskLevel === "Medium"
                      ? "#f59e0b"
                      : "#22c55e",
                }}
              >
                {item.riskLevel}
              </div>

            </div>

          ))}

      </div>

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
    background: "linear-gradient(135deg,#081120,#111c44)",
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
    pointerEvents: "none",
  },

  glow2: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(147,51,234,0.15)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
    pointerEvents: "none",
  },

  title: {
    textAlign: "center",
    fontSize: "48px",
    marginBottom: "40px",
    textShadow: "0 0 25px rgba(59,130,246,0.5)",
    position: "relative",
    zIndex: 2,
  },

  topCards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "22px",
    marginBottom: "35px",
    position: "relative",
    zIndex: 2,
  },

  card: {
    background: "rgba(15,23,42,0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "22px",
    padding: "28px",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
    transition: "0.3s",
  },

  chartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
    gap: "25px",
    marginBottom: "25px",
    position: "relative",
    zIndex: 2,
  },

  chartCard: {
    background: "rgba(15,23,42,0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "30px",
    marginBottom: "25px",
    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
    position: "relative",
    zIndex: 2,
  },

  chartTitle: {
    marginBottom: "20px",
    fontSize: "28px",
  },

  recentCard: {
    background: "rgba(15,23,42,0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
    position: "relative",
    zIndex: 2,
  },

  scanRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  scanDate: {
    opacity: 0.7,
    marginTop: "5px",
  },

  badge: {
    padding: "8px 16px",
    borderRadius: "999px",
    fontWeight: "bold",
    color: "white",
    fontSize: "14px",
  },

  emptyCard: {
    background: "rgba(15,23,42,0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "50px",
    textAlign: "center",
    maxWidth: "700px",
    margin: "100px auto",
    position: "relative",
    zIndex: 2,
  },

  emptyText: {
    marginTop: "15px",
    opacity: 0.75,
    lineHeight: "1.8",
  },

};
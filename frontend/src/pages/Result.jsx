import { useState } from "react";
import Scan from "./Scan";
import History from "./History";
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import Insights from "./Insights";
import Settings from "./Settings";
import About from "./About";





export default function Result({ user }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [history, setHistory] = useState([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
 

  /* ========= PAGE SWITCH LOGIC ========= */
  let page;

  if (activeTab === "home") {
    page = <HomePage user={user} setActiveTab={setActiveTab} />;
  } 
  else if (activeTab === "scan") {
  page = (
  <Scan
    history={history}
    setHistory={setHistory}
  />
);
}
  
else if (activeTab === "dashboard") {
  page = (
    <Dashboard
      history={history}
    />
  );
}

  else if (activeTab === "history") {
  page = (
    <History
      history={history}
      setHistory={setHistory}
    />
  );
}
  else if (activeTab === "reports") {
  page = (
    <Reports
      history={history}
    />
  );
}  

  else if (activeTab === "insights") {
  page = <Insights />;
}

  else if (activeTab === "settings") {
  page = <Settings />;
}

  else if (activeTab === "about") {
  page = <About />;
}

  return (
    <div style={styles.wrapper}>

      {/* ☰ */}
      <div style={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* SIDEBAR */}
      <div
        style={{
          ...styles.sidebar,
          transform: open ? "translateX(0)" : "translateX(-100%)"
        }}
      >
        <div style={styles.item} onClick={() => setActiveTab("home")}>🏠 Home</div>
        <div style={styles.item} onClick={() => setActiveTab("dashboard")}>📊 Dashboard</div>
        <div style={styles.item} onClick={() => setActiveTab("scan")}>🔍 Scan</div>
        <div style={styles.item} onClick={() => setActiveTab("history")}>🧭 History</div>
        <div style={styles.item} onClick={() => setActiveTab("reports")}>📄 Reports</div>
        <div style={styles.item} onClick={() => setActiveTab("insights")}>💡 Insights</div>
        <div style={styles.item} onClick={() => setActiveTab("settings")}>⚙️ Settings</div>
        <div style={styles.item} onClick={() => setActiveTab("about")}>ℹ️ About</div>

        <div
  style={styles.logout}
  onClick={() =>
    setShowLogoutModal(true)
  }
>
  🚪 Logout
</div>
      </div>

      {/* MAIN */}
      <div
  style={{
    ...styles.content,
    marginLeft: open ? "220px" : "0px",
    width: open ? "calc(100% - 220px)" : "100%",
  }}
>
        {page}
      </div>

      {showLogoutModal && (

  <div style={styles.modalOverlay}>

    <div style={styles.logoutModal}>

      <div style={styles.logoutIcon}>
        🚪
      </div>

      <h2 style={styles.logoutTitle}>
        Logout Confirmation
      </h2>

      <p style={styles.logoutText}>
        Are you sure you want to logout
        from FootprintX?
      </p>

      <div style={styles.logoutButtons}>

        <button
          style={styles.cancelBtn}
          onClick={() =>
            setShowLogoutModal(false)
          }
        >
          Cancel
        </button>

        <button
          style={styles.confirmLogoutBtn}
          onClick={() => {

            setShowLogoutModal(false);

            window.location.reload();

          }}
        >
          Logout
        </button>

      </div>

    </div>

  </div>

)}

    </div>
  );
}

/* ================= HOME ================= */

function HomePage({ user, setActiveTab }) {
  return (
    <div style={styles.homeContainer}>

      <div style={styles.bgGlow}></div>

      <h1 style={styles.hello}>
        👋 Hello, {user?.username || "User"}
      </h1>

      <h2 style={styles.welcome}>
        Welcome to FootprintX
      </h2>

      <p style={styles.desc}>
        Monitor your digital footprint, detect exposure risks, and stay protected 
        from cyber threats using intelligent analysis tools.
      </p>

      <div style={styles.featureRow}>
        <div style={styles.featureBox}>📊 Risk Analysis</div>
        <div style={styles.featureBox}>🌐 Platform Detection</div>
        <div style={styles.featureBox}>🚨 Breach Alerts</div>
        <div style={styles.featureBox}>🧠 Smart Insights</div>
      </div>

      <button
        style={styles.startBtn}
        onClick={() => setActiveTab("scan")}
      >
        🚀 Start Your Digital Footprint
      </button>

    </div>
  );

  
}

/* ================= SCAN ================= */



/* ================= STYLES ================= */

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    background: "#0f172a",
    color: "white",
    position: "relative",
    overflow: "auto"
  },

  hamburger: {
    position: "fixed",
    top: "20px",
    left: "20px",
    fontSize: "26px",
    cursor: "pointer",
    zIndex: 2000
  },

  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "220px",
    height: "100vh",
    background: "#111827",
    padding: "70px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    transition: "0.3s",
    zIndex: 1000
  },

  item: {
    padding: "12px",
    background: "#1f2937",
    borderRadius: "8px",
    cursor: "pointer"
  },

  logout: {
    marginTop: "auto",
    color: "red",
    cursor: "pointer"
  },

  content: {
  width: "100%",
  minHeight: "100vh",
  padding: "40px",
  boxSizing: "border-box",
  transition: "0.3s ease",
  overflowY: "auto",
},

  homeContainer: {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  padding: "40px",
},

  bgGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent)",
    filter: "blur(100px)"
  },

  hello: {
    fontSize: "52px",
    fontWeight: "bold"
  },

  welcome: {
    fontSize: "36px",
    marginTop: "20px",
    color: "#60a5fa"
  },

  desc: {
    marginTop: "15px",
    maxWidth: "600px",
    opacity: 0.8
  },

  featureRow: {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  featureBox: {
    padding: "12px 20px",
    background: "#1e293b",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(59,130,246,0.5)"
  },

  modalOverlay: {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  backdropFilter: "blur(10px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
},

logoutModal: {
  width: "100%",
  maxWidth: "420px",
  background:
    "linear-gradient(135deg,#0f172a,#111c44)",
  borderRadius: "28px",
  padding: "40px",
  textAlign: "center",
  boxShadow:
    "0 0 40px rgba(59,130,246,0.25)",
  animation: "fadeIn 0.3s ease",
},

logoutIcon: {
  fontSize: "58px",
  marginBottom: "20px",
},

logoutTitle: {
  fontSize: "30px",
  marginBottom: "15px",
},

logoutText: {
  opacity: 0.8,
  lineHeight: "1.7",
  marginBottom: "35px",
},

logoutButtons: {
  display: "flex",
  gap: "20px",
},

confirmLogoutBtn: {
  flex: 1,
  padding: "15px",
  borderRadius: "14px",
  border: "none",
  background: "#ef4444",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
},

cancelBtn: {
  flex: 1,
  padding: "15px",
  borderRadius: "14px",
  border: "none",
  background: "#374151",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
},

  startBtn: {
    marginTop: "40px",
    padding: "14px 28px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg,#3b82f6,#9333ea)",
    color: "white",
    cursor: "pointer"
  },

  pageTitle: {
    textAlign: "center",
    marginTop: "120px",
    fontSize: "40px"
  }

  
};
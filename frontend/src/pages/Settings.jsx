import React, { useState } from "react";


export default function Settings() {

    

  const [twoFA, setTwoFA] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [deepScan, setDeepScan] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(true);
  

  /* PASSWORD MODAL */

  const [showPasswordModal, setShowPasswordModal] =
    useState(false);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [passwordError, setPasswordError] =
    useState("");

  const [passwordSuccess, setPasswordSuccess] =
    useState("");

  /* PROFILE MODAL */

  const [showModal, setShowModal] = useState(false);

  const [profileImage, setProfileImage] =
    useState(null);

  const [profileData, setProfileData] =
    useState({
      username: "Jeevaranjani G",
      email: "jeeva@footprintx.ai",
    });

  return (

    <div style={styles.container}>

      {/* GLOWS */}

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* TITLE */}

      <h1 style={styles.title}>
        ⚙️ Settings & Preferences
      </h1>

      <p style={styles.subtitle}>
        Manage your account, security preferences,
        privacy controls, and system settings.
      </p>

      {/* PROFILE */}

      <section style={styles.card}>

        <h2 style={styles.sectionTitle}>
          👤 Profile Settings
        </h2>

        <div style={styles.profileBox}>

          {profileImage ? (

            <img
              src={profileImage}
              alt="profile"
              style={styles.profileImage}
            />

          ) : (

            <div style={styles.avatar}>
              {profileData.username.charAt(0)}
            </div>

          )}

          <div>

            <h3 style={styles.profileName}>
              {profileData.username}
            </h3>

            <p style={styles.profileMail}>
              {profileData.email}
            </p>

          </div>

        </div>

        <button
          style={styles.button}
          onClick={() => setShowModal(true)}
        >
          Edit Profile
        </button>

      </section>

      {/* SECURITY */}

      <section style={styles.card}>

        <h2 style={styles.sectionTitle}>
          🔐 Security Controls
        </h2>

        <ToggleRow
          title="Enable Two-Factor Authentication"
          value={twoFA}
          setValue={setTwoFA}
        />

        <ToggleRow
          title="Biometric Login"
          value={darkMode}
          setValue={setDarkMode}
        />

        <ToggleRow
          title="Login Activity Alerts"
          value={notifications}
          setValue={setNotifications}
        />

        <button
          style={styles.button}
          onClick={() => {
            setShowPasswordModal(true);
            setPasswordError("");
            setPasswordSuccess("");
          }}
        >
          Change Password
        </button>

      </section>

      {/* SCAN */}

      <section style={styles.card}>

        <h2 style={styles.sectionTitle}>
          🧠 Scan Preferences
        </h2>

        <ToggleRow
          title="Enable Deep Scan"
          value={deepScan}
          setValue={setDeepScan}
        />

        <ToggleRow
          title="Privacy Protection Mode"
          value={privacyMode}
          setValue={setPrivacyMode}
        />

        <div style={styles.comingSoon}>
          🚀 Dark Web Monitoring — Coming Soon
        </div>

      </section>

      {/* NOTIFICATIONS */}

      <section style={styles.card}>

        <h2 style={styles.sectionTitle}>
          🔔 Notifications
        </h2>

        <ToggleRow
          title="Email Breach Alerts"
          value={notifications}
          setValue={setNotifications}
        />

        <ToggleRow
          title="Weekly Security Reports"
          value={twoFA}
          setValue={setTwoFA}
        />

        <ToggleRow
          title="Threat Intelligence Updates"
          value={privacyMode}
          setValue={setPrivacyMode}
        />

      </section>

      {/* APPEARANCE */}

      <section style={styles.card}>

        <h2 style={styles.sectionTitle}>
          🎨 Appearance
        </h2>

        <ToggleRow
  title="Dark Mode"
  value={darkMode}
  setValue={setDarkMode}
/>

        <div style={styles.themeRow}>

  <div style={styles.theme}></div>

  <div style={styles.themePurple}></div>

  <div style={styles.themeBlue}></div>

</div>

      </section>

      {/* PRIVACY */}

      <section style={styles.card}>

        <h2 style={styles.sectionTitle}>
          🛡 Privacy & Data
        </h2>

        <button style={styles.secondaryButton}>
          Download My Data
        </button>

        <button style={styles.secondaryButton}>
          Clear Scan History
        </button>

        <button style={styles.dangerButton}>
          Delete Account
        </button>

      </section>

      {/* SYSTEM */}

      <section style={styles.systemCard}>

        <h2 style={styles.systemTitle}>
          FootprintX v1.0
        </h2>

        <p style={styles.systemText}>
          Cyber Intelligence & Digital
          Footprint Protection Platform
        </p>

      </section>

      {/* EDIT PROFILE MODAL */}

      {showModal && (

        <div style={styles.modalOverlay}>

          <div style={styles.modal}>

            <button
              style={styles.closeBtn}
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 style={styles.modalTitle}>
              ✨ Edit Profile
            </h2>

            <div style={styles.uploadSection}>

              {profileImage ? (

                <img
                  src={profileImage}
                  alt="profile"
                  style={styles.uploadImage}
                />

              ) : (

                <div style={styles.uploadAvatar}>
                  {profileData.username.charAt(0)}
                </div>

              )}

              <label style={styles.uploadButton}>

                📷 Choose Your Profile Photo

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {

                    const file =
                      e.target.files[0];

                    if (file) {

                      setProfileImage(
                        URL.createObjectURL(file)
                      );

                    }
                  }}
                  style={{ display: "none" }}
                />

              </label>

            </div>

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Username
              </label>

              <input
                type="text"
                value={profileData.username}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    username: e.target.value,
                  })
                }
                style={styles.input}
              />

            </div>

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Email
              </label>

              <input
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    email: e.target.value,
                  })
                }
                style={styles.input}
              />

            </div>

            <div style={styles.modalButtons}>

              <button
                style={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                style={styles.saveBtn}
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

      {/* PASSWORD MODAL */}

      {showPasswordModal && (

        <div style={styles.modalOverlay}>

          <div style={styles.modal}>

            <button
              style={styles.closeBtn}
              onClick={() =>
                setShowPasswordModal(false)
              }
            >
              ✕
            </button>

            <h2 style={styles.modalTitle}>
              🔐 Change Password
            </h2>

            {/* CURRENT PASSWORD */}

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Current Password
              </label>

              <div style={styles.passwordWrapper}>

                <input
                  type={
                    showCurrent
                      ? "text"
                      : "password"
                  }
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                  style={styles.passwordInput}
                />

                <span
                  style={styles.eye}
                  onClick={() =>
                    setShowCurrent(!showCurrent)
                  }
                >
                  {showCurrent ? "🙈" : "👁"}
                </span>

              </div>

            </div>

            {/* NEW PASSWORD */}

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                New Password
              </label>

              <div style={styles.passwordWrapper}>

                <input
                  type={
                    showNew
                      ? "text"
                      : "password"
                  }
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                  style={styles.passwordInput}
                />

                <span
                  style={styles.eye}
                  onClick={() =>
                    setShowNew(!showNew)
                  }
                >
                  {showNew ? "🙈" : "👁"}
                </span>

              </div>

            </div>

            {/* CONFIRM */}

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Confirm Password
              </label>

              <div style={styles.passwordWrapper}>

                <input
                  type={
                    showConfirm
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  style={styles.passwordInput}
                />

                <span
                  style={styles.eye}
                  onClick={() =>
                    setShowConfirm(!showConfirm)
                  }
                >
                  {showConfirm ? "🙈" : "👁"}
                </span>

              </div>

            </div>

            {passwordError && (

              <div style={styles.errorText}>
                {passwordError}
              </div>

            )}

            {passwordSuccess && (

              <div style={styles.successText}>
                {passwordSuccess}
              </div>

            )}

            <div style={styles.modalButtons}>

              <button
                style={styles.cancelBtn}
                onClick={() =>
                  setShowPasswordModal(false)
                }
              >
                Cancel
              </button>

              <button
                style={styles.saveBtn}
                onClick={() => {

                  if (
                    newPassword !==
                    confirmPassword
                  ) {

                    setPasswordError(
                      "Passwords do not match"
                    );

                    return;
                  }

                  if (newPassword.length < 6) {

                    setPasswordError(
                      "Password must be at least 6 characters"
                    );

                    return;
                  }

                  setPasswordError("");

                  setPasswordSuccess(
                    "Password updated successfully"
                  );

                  setTimeout(() => {

                    setShowPasswordModal(false);

                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");

                  }, 1200);

                }}
              >
                Update Password
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* TOGGLE */

function ToggleRow({ title, value, setValue }) {

  return (

    <div style={styles.toggleRow}>

      <span>{title}</span>

      <div
        onClick={() => setValue(!value)}
        style={{
          ...styles.toggle,
          justifyContent: value
            ? "flex-end"
            : "flex-start",
          background: value
            ? "#3b82f6"
            : "#374151",
        }}
      >

        <div style={styles.toggleCircle}></div>

      </div>

    </div>
  );
}

/* STYLES */

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
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    marginBottom: "50px",
  },

  card: {
    background: "rgba(30,41,59,0.92)",
    padding: "30px",
    borderRadius: "28px",
    marginBottom: "30px",
  },

  sectionTitle: {
    marginBottom: "25px",
    fontSize: "26px",
  },

  profileBox: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "bold",
  },

  profileImage: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  profileName: {
    fontSize: "24px",
  },

  profileMail: {
    opacity: 0.7,
    marginTop: "8px",
  },

  button: {
    padding: "14px 24px",
    border: "none",
    borderRadius: "14px",
    background:
      "linear-gradient(90deg,#3b82f6,#9333ea)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  toggleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "22px",
  },

  toggle: {
    width: "70px",
    height: "36px",
    borderRadius: "999px",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  toggleCircle: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "white",
  },

  comingSoon: {
    marginTop: "20px",
    opacity: 0.7,
  },

  themeRow: {
    display: "flex",
    gap: "20px",
    marginTop: "25px",
  },

  theme: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
  },

  themePurple: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#9333ea,#c084fc)",
  },

  themeBlue: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#2563eb,#60a5fa)",
  },

  secondaryButton: {
    width: "100%",
    padding: "16px",
    marginBottom: "18px",
    borderRadius: "16px",
    border: "none",
    background: "#0f172a",
    color: "white",
    cursor: "pointer",
  },

  dangerButton: {
    width: "100%",
    padding: "16px",
    borderRadius: "16px",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
  },

  systemCard: {
    textAlign: "center",
    padding: "35px",
  },

  systemTitle: {
    fontSize: "28px",
  },

  systemText: {
    lineHeight: "1.8",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.82)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },

  modal: {
    width: "100%",
    maxWidth: "600px",
    background:
      "linear-gradient(135deg,#0f172a,#111c44)",
    borderRadius: "30px",
    padding: "40px",
    position: "relative",
  },

  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
  },

  modalTitle: {
    textAlign: "center",
    marginBottom: "35px",
    fontSize: "34px",
  },

  uploadSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "35px",
  },

  uploadAvatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#3b82f6,#9333ea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "bold",
  },

  uploadImage: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  uploadButton: {
    marginTop: "18px",
    padding: "12px 22px",
    borderRadius: "14px",
    background:
      "linear-gradient(90deg,#3b82f6,#9333ea)",
    cursor: "pointer",
    fontWeight: "bold",
  },

  inputGroup: {
    marginBottom: "24px",
  },

  label: {
    display: "block",
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "#1e293b",
    color: "white",
    outline: "none",
    boxSizing: "border-box",
  },

  modalButtons: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  },

  passwordWrapper: {
    position: "relative",
    width: "100%",
  },

  passwordInput: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "#1e293b",
    color: "white",
    outline: "none",
    boxSizing: "border-box",
  },

  eye: {
    position: "absolute",
    right: "18px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },

  errorText: {
    color: "#ef4444",
    fontWeight: "bold",
  },

  successText: {
    color: "#22c55e",
    fontWeight: "bold",
  },

  cancelBtn: {
    flex: 1,
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "#374151",
    color: "white",
    cursor: "pointer",
  },

  saveBtn: {
    flex: 1,
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background:
      "linear-gradient(90deg,#3b82f6,#9333ea)",
    color: "white",
    cursor: "pointer",
  },

};
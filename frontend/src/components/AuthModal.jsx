import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthModal({ type, setType, onClose, onSuccess }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // SIGNUP
  const handleSignup = () => {
    setError("");

    if (!email || !username || !password) {
      setError("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ email, username, password });

    localStorage.setItem("users", JSON.stringify(users));

    onSuccess({ email, username });
  };

  // LOGIN (email OR username)
  const handleLogin = () => {
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        (u.email === email || u.username === email) &&
        u.password === password
    );

    if (!foundUser) {
      setError("Invalid credentials");
      return;
    }

    onSuccess(foundUser);
  };

  return (
    <div style={overlayStyle}>
      <motion.div style={modalStyle}>
        <button onClick={onClose} style={closeBtn}>✕</button>

        <h2 style={title}>
          {type === "login" && "Login"}
          {type === "signup" && "Sign Up"}
        </h2>

        {/* LOGIN */}
        {type === "login" && (
          <>
            <input
              placeholder="Email or Username"
              style={input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              style={input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button style={button} onClick={handleLogin}>
              Login
            </button>

            {error && <p style={errorStyle}>{error}</p>}

            <p style={switchText}>
              No account?{" "}
              <span style={linkInline} onClick={() => setType("signup")}>
                Sign Up
              </span>
            </p>
          </>
        )}

        {/* SIGNUP */}
        {type === "signup" && (
          <>
            <input
              placeholder="Email"
              style={input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Username"
              style={input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              style={input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button style={button} onClick={handleSignup}>
              Create Account
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(8px)"
};

const modalStyle = {
  background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
  padding: "30px",
  borderRadius: "16px",
  width: "360px",
  color: "white",
  boxShadow: "0 0 25px rgba(59,130,246,0.4)",
  border: "1px solid rgba(147,51,234,0.3)"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid rgba(59,130,246,0.4)",
  background: "rgba(15,23,42,0.8)",
  color: "white",
  outline: "none"
};

const button = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #3b82f6, #9333ea)",
  border: "none",
  color: "white",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(59,130,246,0.5)"
};

const title = {
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "22px",
  textShadow: "0 0 10px rgba(147,51,234,0.6)"
};

const switchText = {
  textAlign: "center",
  marginTop: "12px",
  fontSize: "13px",
  opacity: 0.8
};

const linkInline = {
  color: "#60a5fa",
  cursor: "pointer",
  fontWeight: "bold"
};

const closeBtn = { float: "right" };






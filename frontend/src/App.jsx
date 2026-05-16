import { useState } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Result from "./pages/Result";



export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  return (
    <>
      {page === "home" && <Home goToLanding={() => setPage("landing")} />}

      {page === "landing" && (
        <Landing
          setUser={(data) => {
            setUser(data);
            setPage("result");
          }}
        />
      )}

      {page === "result" && (
  <Result user={user} />
)}
    </>
  );
}
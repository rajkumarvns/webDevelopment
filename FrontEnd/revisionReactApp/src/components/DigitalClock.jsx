import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(255,255,255,0.9)",
        }}
      >
        <h2>🕒 Digital Clock</h2>

        <h1 style={{ fontSize: "60px" }} className="text-info">
          {time.toLocaleTimeString()}
        </h1>

        <h3>{time.toDateString()}</h3>
      </div>
    </div>
  );
}

export default DigitalClock;

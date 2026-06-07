import { FaWifi } from "react-icons/fa";
import { Bookmark } from "lucide-react";
import { useState, useEffect } from "react";
function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
      <div className="parent">
        <div className="card rounded-4">
          <div className="top">
            <img
              src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg"
              alt="amazon logo"
            />
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>
          <div className="center">
            <h3>
              Amazon <span>5 days ago</span>
            </h3>
            <h2>UI/UX Design</h2>
            <div>
              <h4>Part Time</h4>
              <h4>Beginner Level</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

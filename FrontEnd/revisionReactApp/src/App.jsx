import { FaWifi } from "react-icons/fa";
import { Bookmark } from "lucide-react";
function App() {
  return (
    <>
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

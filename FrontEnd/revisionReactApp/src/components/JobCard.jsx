import { Bookmark } from "lucide-react";

function JobCard() {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg"
            alt="Company Logo"
          />

          <button>
            <Bookmark size={16} />
            Save
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon
            <span> • 5 days ago</span>
          </h3>

          <h2>UI/UX Designer</h2>

          <div className="details">
            <h4>Part Time</h4>

            <h4>Beginner</h4>
          </div>

          <p>
            Create attractive user interfaces and improve user experience for
            web applications.
          </p>
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
  );
}

export default JobCard;

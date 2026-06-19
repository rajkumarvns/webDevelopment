import { Bookmark } from "lucide-react";

function JobCard() {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      days: "5 days ago",
      role: "UI/UX Designer",
      type: "Part Time",
      level: "Beginner",
      description:
        "Create attractive user interfaces and improve user experience for web applications.",
      salary: "$120/hr",
      location: "Mumbai, India",
      image:
        "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg",
    },

    {
      id: 2,
      company: "Google",
      days: "2 days ago",
      role: "Frontend Developer",
      type: "Full Time",
      level: "Intermediate",
      description:
        "Build responsive websites using React and modern JavaScript.",
      salary: "$150/hr",
      location: "Bangalore, India",
      image:
        // Google
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },

    {
      id: 3,
      company: "Microsoft",
      days: "1 day ago",
      role: "Backend Developer",
      type: "Remote",
      level: "Experienced",
      description:
        "Develop APIs and manage databases using Node.js and MongoDB.",
      salary: "$180/hr",
      location: "Hyderabad, India",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((job) => (
        <div className="card" key={job.id}>
          <div className="top">
            <img src={job.image} alt="Company Logo" />

            <button>
              <Bookmark size={16} />
              Save
            </button>
          </div>

          <div className="center">
            <h3>
              {job.company}
              <span> • {job.days}</span>
            </h3>

            <h2>{job.role}</h2>

            <div className="details">
              <h4>{job.type}</h4>

              <h4>{job.level}</h4>
            </div>

            <p>{job.description}</p>
          </div>

          <div className="bottom">
            <div>
              <h3>{job.salary}</h3>

              <p>{job.location}</p>
            </div>

            <button>Apply Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobCard;

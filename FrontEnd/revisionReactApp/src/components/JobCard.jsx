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

    {
      id: 4,
      company: "Apple",
      days: "3 days ago",
      role: "iOS Developer",
      type: "Full Time",
      level: "Intermediate",
      description:
        "Develop high-performance mobile applications for Apple ecosystem.",
      salary: "$160/hr",
      location: "Cupertino, USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },

    {
      id: 5,
      company: "Netflix",
      days: "4 days ago",
      role: "Full Stack Developer",
      type: "Full Time",
      level: "Experienced",
      description:
        "Build scalable streaming solutions with cutting-edge technologies.",
      salary: "$200/hr",
      location: "Los Gatos, USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },

    {
      id: 6,
      company: "Tesla",
      days: "2 days ago",
      role: "Software Engineer",
      type: "Full Time",
      level: "Experienced",
      description:
        "Work on autonomous driving and vehicle software infrastructure.",
      salary: "$190/hr",
      location: "Palo Alto, USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Tesla_T_symbol.svg",
    },

    {
      id: 7,
      company: "Meta",
      days: "1 day ago",
      role: "React Developer",
      type: "Full Time",
      level: "Intermediate",
      description:
        "Build next-generation social platforms using React and GraphQL.",
      salary: "$170/hr",
      location: "Menlo Park, USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Meta_Platforms_Inc._logo.svg",
    },

    {
      id: 8,
      company: "Adobe",
      days: "6 days ago",
      role: "Creative Technologist",
      type: "Part Time",
      level: "Beginner",
      description:
        "Design and implement interactive experiences using web technologies.",
      salary: "$130/hr",
      location: "San Jose, USA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Adobe_Corporate_Logo.svg",
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

import React, { useState, useEffect } from "react";
import NavBarCandidate from "../Navbar/NavbarCandidate";
import "./Profile.scss"; // Import your stylesheet for styling
import axios from "axios"; // If you need to make HTTP requests
import Select from "react-select";

const skillOptions = [
  { value: "Leadership", label: "Leadership" },
  { value: "Problem Solving", label: "Problem Solving" },
  { value: "Communication", label: "Communication" },
  { value: "Teamwork", label: "Teamwork" },
  { value: "Adaptability", label: "Adaptability" },
  { value: "Organizational Skills", label: "Organizational Skills" },
  { value: "Time Management", label: "Time Management" },
  { value: "Creativity", label: "Creativity" },
  { value: "Critical Thinking", label: "Critical Thinking" },
];

function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "I am a dedicated student pursuing my undergraduate degree in Computer Science with a passion for leveraging technology to solve real-world problems. I am actively involved in community service and have a strong commitment to academic excellence.",
    avatarUrl: "https://example.com/avatar.jpg",
    lookingFor: "In my future academic pursuits, I seek opportunities that will allow me to further my studies in Computer Science and contribute meaningfully to society through innovative projects and research initiatives.",
    desiredScholarship: "Full Scholarship",
    desiredField: "Computer Science",
    academicAchievements: "Recipient of the Dean's List Award for consecutive semesters.",
    skills: [],
    resume: null,
  });

  const [appliedScholarships, setAppliedScholarships] = useState([]);

  const fetchAppliedScholarships = async () => {
    try {
      const exampleAppliedScholarships = [
        { id: 1, title: "STEM Scholarship", organization: "Tech Scholars Foundation", date: "2024-07-01", status: "Pending" },
        { id: 2, title: "Merit-Based Scholarship", organization: "Academic Excellence Foundation", date: "2024-06-28", status: "Accepted" },
        { id: 3, title: "Diversity Scholarship", organization: "Diversity in Tech Initiative", date: "2024-06-25", status: "Rejected" },
      ];
      setAppliedScholarships(exampleAppliedScholarships);
    } catch (error) {
      console.error("Error fetching applied scholarships:", error);
    }
  };

  useEffect(() => {
    fetchAppliedScholarships();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setUserInfo({ ...userInfo, skills: selectedOptions });
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setUserInfo({ ...userInfo, resume: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Example: Update user info via API call
      // const response = await axios.put("http://api.example.com/user/profile", userInfo);
      console.log("User info updated successfully!");
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  return (
    <div>
      <NavBarCandidate /> {/* Assuming you have a navigation bar component */}
      <div className="profile-container">
        <div className="profile-header">
          <h1>Profile Page</h1>
          <img src={userInfo.avatarUrl} alt="User Avatar" className="avatar" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={userInfo.bio}
              onChange={handleChange}
              rows={4}
            />
          </label>
          <label>
            Desired Scholarship:
            <input
              type="text"
              name="desiredScholarship"
              value={userInfo.desiredScholarship}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Desired Field:
            <input
              type="text"
              name="desiredField"
              value={userInfo.desiredField}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Academic Achievements:
            <textarea
              name="academicAchievements"
              value={userInfo.academicAchievements}
              onChange={handleChange}
              rows={2}
            />
          </label>
          <label className="skills-label">
            Skills:
            <Select
              isMulti
              name="skills"
              options={skillOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={userInfo.skills}
              onChange={handleSkillsChange}
            />
          </label>
          <label className="file-upload-label">
            Upload or Update Resume:
            <input
              type="file"
              name="resume"
              onChange={handleResumeChange}
              className="file-upload-input"
            />
          </label>
          <button type="submit">Save</button>
        </form>

        <div className="applied-jobs">
          <h2>Applied Scholarships</h2>
          <ul>
            {appliedScholarships.map((scholarship) => (
              <li key={scholarship.id}>
                <strong>{scholarship.title}</strong> at {scholarship.organization} (Applied on {scholarship.date}) - Status: {scholarship.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

import React, { useState } from "react";
import Footer from "../Footer/Footer";
import JobListing from "../Jobs/JobListing";
import NavBarCandidate from "../Navbar/NavbarCandidate";
import "./Candidate.scss";
import { scholarships } from "../../DummyData.js/DummyData";
import image from "./49342674_9214769.jpg";
import Candidate_message from "../Candidate_message/Candidate_message";

function Candidate() {
  const [keyword, setKeyword] = useState("");

  // Function to handle keyword search
  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
  };

  // Filter scholarships based on keyword
  const filteredScholarships = scholarships.filter((scholarship) =>
    scholarship.title.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <div>
      <NavBarCandidate setKeyword={handleSearch} /> {/* Pass down the function as setKeyword */}
      <div className="contents">
        <div className="candidate-container">
          <h2 className="head">
            {filteredScholarships.length > 0 ? (
              "Available Scholarships"
            ) : (
              <div>
                <img src={image} alt="No Results Found" className="nojob" />
                <h4>No scholarships found</h4>
                <p>
                  Modify search criteria or create an alert to get relevant
                  scholarships as soon as they're posted
                </p>
              </div>
            )}
          </h2>
          <div className="candidate">
            {filteredScholarships.map((scholarship) => (
              <JobListing job={scholarship} key={scholarship.id} />
            ))}
          </div>
        </div>
        <div className="message-container">
          <h2>Messages</h2>
          <Candidate_message />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Candidate;

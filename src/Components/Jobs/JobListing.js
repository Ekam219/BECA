import React, { useState } from "react";
import "./JobsListing.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function JobListing(props) {
  const [viewDetails, setViewDetails] = useState(false);

  const toggleViewDetails = () => {
    setViewDetails((value) => !value);
  };

  const applyForScholarship = () => {
    alert("Applied successfully");
  };

  return (
    <div className="job-listing">
      <h2 className="job-title">{props.job.title}</h2>
      <p className="job-company">
        <FontAwesomeIcon icon={faBuilding} /> {props.job.provider}
      </p>
      <p className="job-location">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.job.location}
      </p>
      <div className="job-skills">
        <h3><FontAwesomeIcon icon={faClipboardList} /> Description</h3>
        <p>{props.job.description}</p>
        {viewDetails && (
          <div className="job-details">
            <div className="job-requirements">
              <h3>Eligibility</h3>
              <p>{props.job.eligibility}</p>
              <h3>Benefits</h3>
              <p>{props.job.benefits}</p>
              <h3>Deadline</h3>
              <p>{props.job.deadline}</p>
              <h3>Website</h3>
              <a href={props.job.website} target="_blank" rel="noopener noreferrer">{props.job.website}</a>
            </div>
          </div>
        )}
      </div>
      
      <button className='apply-button' onClick={applyForScholarship}>Apply</button>
  
      <button onClick={toggleViewDetails} className='apply-button'>
        {viewDetails ? (
          <>View Less <FaAngleUp /></>
        ) : (
          <>View More <FaAngleDown /></>
        )}
      </button>
    </div>
  );
}

export default JobListing;

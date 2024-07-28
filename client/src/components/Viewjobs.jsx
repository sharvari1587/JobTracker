// ViewJobs.js
import React from 'react';
import { useAuth } from '../store/auth';
import "./index.css"

function Viewjobs() {
  const { gotjob } = useAuth();

  return (
    <div className="view-jobs-container">
      <h1>View Jobs</h1>
      <div className="jobs-list">
        {gotjob.map(job => (
          <div key={job.id} className="job-item">
            <h2>{job.comapanyName}</h2>
            <p><strong>Skills:</strong> {job.skills}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>End Date:</strong> {job.endDate}</p>
            <p><strong>Vacancy:</strong> {job.vacancy}</p>
            <div className='apply-button-div'>
              <button className="apply-button">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewjobs;

import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import './index.css';
import { Link } from 'react-router-dom';

function Adminview() {
  const { gotjob } = useAuth();
  const { tokenglobal } = useAuth();
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    setJobs(gotjob);
  }, [gotjob]);

  const deletejob = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/v1/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${tokenglobal}`,
        },
      });

      // Check if deletion was successful
      if (response.ok) {
        // Remove the deleted job from the jobs list
        setJobs(jobs.filter(job => job._id !== id));
      } else {
        console.error('Failed to delete job');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="view-jobs-container">
        <h1>View Jobs</h1>
        <Link to="/admin/addjob">
        <button >Add New Job Posts</button>
        </Link>
        
        <table className="jobs-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Skills</th>
              <th>Description</th>
              <th>End Date</th>
              <th>Vacancy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id} >
                <td>{job.comapanyName}</td>
                <td>{job.skills}</td>
                <td>{job.description}</td>
                <td>{job.endDate}</td>
                <td>{job.vacancy}</td>
                <td>
                  <button onClick={() => deletejob(job._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminview;

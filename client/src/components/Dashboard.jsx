import React from 'react'
import { useAuth } from '../store/auth'
import "./index.css"

// Dashboard.js

// ... (your existing imports)

function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <div className="dashboard">
        <div className="main-content">
          <h1
          >Welcome to the Dashboard, {user.userName}!</h1>
          <div className="user-details">
            <p><strong>First Name:</strong> Sharvari</p>
            <p><strong>Last Name:</strong> Borse</p>
            <p><strong>Username:</strong> {user.userName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Qualification:</strong> </p>
            {/* Add more user details as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

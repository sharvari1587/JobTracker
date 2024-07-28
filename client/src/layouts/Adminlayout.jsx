import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './adminnavbar.css'; // Import the CSS file for styling

function Adminlayout() {
    return (
        <>
        <header>
            <nav className="admin-navbar"> {/* Apply a class name for styling */}
                <ul>
                    <li>
                        <NavLink
                            to="/admin/addjob"
                            activeClassName="active" // Apply a class for active link
                        >
                            Add Job
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/admin/alljobs"
                            activeClassName="active" // Apply a class for active link
                        >
                            View Jobs
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/"
                            activeClassName="active" // Apply a class for active link
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/admin/responses"
                            activeClassName="active" // Apply a class for active link
                        >
                            Responses
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        </>
    )
}

export default Adminlayout

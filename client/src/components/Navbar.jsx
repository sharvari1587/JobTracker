import React from 'react'
import { NavLink } from "react-router-dom"
import "./navbar.css"
import { useAuth } from "../store/auth"

function Navbar() {
    const { isloggedin } = useAuth();
    return (
        <>

            <div className="navbar">
                <div className="logo">
                    <h1>Joby</h1>
                </div>

                <div className="nav_btn">
                    <NavLink
                        to="/"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "orange" : "white"
                            };
                        }}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "orange" : "white"
                            };
                        }}
                    >
                        About
                    </NavLink>

                    {isloggedin ?
                        (
                            <>
                            <NavLink
                                to="/logout"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "orange" : "white"
                                    };
                                }}
                            >
                                Logout
                            </NavLink>

                            <NavLink
                                to="/dashboard"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "orange" : "white"
                                    };
                                }}
                            >
                               Dashboard
                            </NavLink>
                        </>

                        )
                        :
                        (<>
                            <NavLink
                                to="/login"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "orange" : "white"
                                    };
                                }}
                            >
                                Login
                            </NavLink>

                            <NavLink
                                to="/register"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "orange" : "white"
                                    };
                                }}
                            >
                                Register
                            </NavLink>
                        </>)}



                </div>
            </div>

        </>
    )
}


function Footer() {
    return (
        <footer>
            <div>
                <h1>Contact Us</h1>
                <p>Email: info@example.com</p>
                <p>Phone: +123456789</p>
            </div>
            <div>
                <h1>Follow Us</h1>
                <p><a href="#" target="_blank">Facebook</a></p>
                <p><a href="#" target="_blank">Twitter</a></p>
                <p><a href="#" target="_blank">Instagram</a></p>
            </div>
        </footer>
    )
}

export { Navbar, Footer }


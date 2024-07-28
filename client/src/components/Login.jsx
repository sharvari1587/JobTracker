import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"
import { useAuth}  from '../store/auth'

function Login() {

  const {storeTokenInLS }= useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: ""
  })

  const handleInput = function (e) {
    let name = e.target.name
    let value = e.target.value

    setUser(
      {
        ...user,
        [name]: value
      }
    )
    console.log(admin)
  }

  const handleSubmit = async function (e) {
    e.preventDefault()

    try {

      const response = await fetch("http://localhost:3000/v1/login", {
        method: "POST",
        headers: {

          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      }
      )
      // console.log(user)
      if (response.ok) {
        const rej = await response.json()
        console.log("response is ", rej.token);
        storeTokenInLS(rej.token);

        alert("succesfully logged in")
        navigate("/")
      }
      else {
        alert("Invalid Credentials")
      }
    } catch (error) {

    }

  }

  return (
    <>
      <div className='login-container'>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label className='label'>
            Username:
            <input
              type="text"
              name='userName'
              placeholder='Enter Username'
              value={user.userName}
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <label >
            Password:
            <input
              type="password"
              name='password'
              placeholder='Enter password'
              value={user.password}
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login

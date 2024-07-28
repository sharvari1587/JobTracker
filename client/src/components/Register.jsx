import React from 'react';
import './index.css';
import { useState } from 'react';
import {useNavigate} from  'react-router-dom'
import { useAuth } from '../store/auth';

function Register() {

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth();
  const [user, setUser] = useState({
    userName:"",
    email:"",
    password:""
  })

  const handleInput = function(e)
  {
    let name = e.target.name;
    let value = e.target.value; 
    setUser({
     ...user,        //all the user's entity must be present i.e if changing email username with password should also be saved 
      [name]:value
    })
    //console.log(user)
  }

  const handleSubmit = async function(e)
  {
    e.preventDefault();
    
   try {
    const response = await fetch("http://localhost:3000/v1/registration/",
    {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    console.log(response)
    
    alert("User "+user.userName+" Created Succesfully")

    if(response.ok)
    {
      const rej = await response.json()
        console.log("response is ", rej.token);
        storeTokenInLS(rej.token);
      navigate("/login")
    }
    
   } catch (error) {
    console.log("register ", error)
   }
  }

  return (
    <div className="register-container">
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="userName">Username:</label>
        <input 
        type="text" 
        id="userName" 
        name="userName"
        placeholder='Username'
        value={user.userName}
        onChange={handleInput}
        required />

        <label htmlFor="email">Email:</label>
        <input type="email" 
        id="email" 
        name="email"
        placeholder='email'
        value={user.email}
        onChange={handleInput}
        required />

        <label htmlFor="password">Password:</label>
        <input type="password" 
        id="password" 
        name="password"
        placeholder='password'
        value={user.password}
        onChange={handleInput}
        required />

        {/* <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required /> */}

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}

export default Register;

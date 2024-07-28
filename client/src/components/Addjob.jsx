import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import "./index.css"

function Addjob() {

  const {tokenglobal} = useAuth();

  const [jobDetails, setjobDetails] = useState({
    comapanyName:"",
    skills:"",
    description:"", 
    endDate:"",
    vacancy:""
  })

  const handleChange = (e)=>
  {
    let name = e.target.name
    let value = e.target.value
    setjobDetails(
      {
        ...jobDetails,
        [name]:value
      }
    )
    //console.log(jobDetails)

  }

  const handleSubmit = async () =>
  {
    try {
      
      const response = await fetch("http://localhost:3000/v1/addjob/",
      {
        method:'POST',
        headers:
        {
         "Content-Type":"application/JSON",
          Authorization: tokenglobal
        },
        body: JSON.stringify(jobDetails)
      })

      if(response.ok)
      {
        alert("Sent Successfully")
      }
      else{
        alert(`unsuccessful`)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className='add-job-container'>
      <h2>Add a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label className='label-addjob'>
          Company Name:
          <input
            type="text"
            name="comapanyName"
            value={jobDetails.comapanyName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='label-addjob'>
          Skills:
          <input
            type="text"
            name="skills"
            value={jobDetails.skills}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='label-addjob'>
          Description:
          <textarea
            name="description"
            value={jobDetails.description}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='label-addjob'>
          End Date:
          <input
            type="date"
            name="endDate"
            value={jobDetails.endDate}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='label-addjob'>
          Vacancy:
          <input
            type="number"
            name="vacancy"
            value={jobDetails.vacancy}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Addjob

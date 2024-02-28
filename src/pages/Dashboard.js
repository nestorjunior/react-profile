import React from "react"
import { useLocation } from "react-router-dom" 
import './Dashboard.scss'

const Dashboard = () => {
  const location = useLocation()
  const user = location.state.user

  return (
    <>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
        <div className="card p-4"> 
          <div className="image d-flex flex-column justify-content-center align-items-center"> 
            <img src="https://doodleipsum.com/700/avatar-4?i=be176fd7d38de78c85dbfba873eb723a" height="100" width="100" alt="Profile" />
            <span className="name mt-3">{user.name}</span> 
            <span className="idd">@{user.username}</span> 
            
            <div className="d-flex mt-2"> 
              <button className="btn btn-dark">Upload image</button> 
            </div> 
            <div className="text mt-3"> 
              <span>E-mail: {user.email}</span> 
            </div>  
          </div> 
        </div> 
      </div>
    </>
  )
}

export default Dashboard
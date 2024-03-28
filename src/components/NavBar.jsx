import React from 'react'
import Login from '../pages/Login'

function NavBar() {
  return (
   <>
	<nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">React Tasks</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-2 active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 " href="/count">Count</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/ratings">Ratings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/currenttime">Current Time</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-lg-inline-flex">
              <li className="nav-item mx-2">
                <a className="nav-link  navhead" href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <Login/>
                      <div className="modal-footer">
                        <button type="button " className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>





              </li>
            </ul>


          
        </div>
      </div>
    </nav>
</>
  )
}

export default NavBar
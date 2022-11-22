import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link active navbar-brand" aria-current="page" to="/">All blogs</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active navbar-brand" to="/create">Create a blogpost</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  )
}

export default Navbar
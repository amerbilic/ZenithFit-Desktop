import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar-nav">
        <li className="logo">
          <Link to="/home" className="nav-link">
              <span className="link-text-l">Zenith</span>
              <i className="fas fa-dumbbell"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            <i className="fas fa-users"></i>
            <span className="link-text">Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <i className="fas fa-store"></i>
            <span className="link-text">Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            <i className="fas fa-credit-card"></i>
            <span className="link-text">Orders</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-link">
            <i className="fas fa-file-alt"></i>
            <span className="link-text">Reports</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-sign-out-alt"></i>
            <span className="link-text">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import BackChevronLink from '../atoms/backChevronLink'

class UsersPage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="mainDiv u-t-center d-flex flex-column ">
          <div className="heading d-flex flex-row align-items-center justify-content-center">
            <BackChevronLink to="/home" />
            <h1 className="fw-bold">Users Admin Panel</h1>
          </div>
          <div className="menu-wrapper">
            <Link to="/userAdd">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  ⚙
                </span>
               New User
              </button>
            </Link>
            <Link to="/userList">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  🗄️
                </span>
                View Users
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default UsersPage

import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

class UsersPage extends React.PureComponent {
  render() {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <div className="mainDiv u-t-center d-flex flex-column ">
          <div className="heading d-flex flex-row align-items-center justify-content-center">
            <h1 className="mainTitle">Users Admin Panel</h1>
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
      </motion.div>
    )
  }
}

export default UsersPage

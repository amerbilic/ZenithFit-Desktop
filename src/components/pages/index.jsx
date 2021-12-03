import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

class Index extends React.PureComponent {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Fragment>
          <div className="mainDiv u-t-center">
            <h1 className="mainTitle">ZenithFit Admin Panel</h1>
            <div className="menu-wrapper">
              <Link to="/users">
                <button type="button" className="btn-chunky btn-dark">
                  <span role="img" className="button-icon">
                    ⚙
                  </span>
                  Users
                </button>
              </Link>
              <Link to="/products">
                <button type="button" className="btn-chunky btn-dark">
                  <span role="img" className="button-icon">
                    🗄️
                  </span>
                  Products
                </button>
              </Link>
              <Link to="/orders">
                <button type="button" className="btn-chunky btn-dark">
                  <span role="img" className="button-icon">
                    🛍️
                  </span>
                  Orders
                </button>
              </Link>
              <Link to="/reports">
                <button type="button" className="btn-chunky btn-dark">
                  <span role="img" className="button-icon">
                    🛍️
                  </span>
                  Reports
                </button>
              </Link>
            </div>
          </div>
        </Fragment>
      </motion.div>
    )
  }
}

export default Index

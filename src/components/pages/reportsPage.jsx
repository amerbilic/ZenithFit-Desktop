import React from 'react'
import { Link } from 'react-router-dom'
import BackChevronLink from '../atoms/backChevronLink'
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
        <div className="mainDiv u-t-center d-flex flex-column align-items-center justify-content-center">
          <div className="heading d-flex flex-row">
            <BackChevronLink to="/home" />
            <h1 className="mainTitle">Reports</h1>
          </div>
          <div className="menu-wrapper">
            <Link to="/top10Customers">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  ⚙
                </span>
                Top 10 Customers
              </button>
            </Link>
            <Link to="/top10Articles">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  🗄️
                </span>
                Top 10 Articles
              </button>
            </Link>
            <Link to="/top10RatedArticles">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  🗄️
                </span>
               Articles with best ratings
              </button>
            </Link>
            <Link to="/ordersBetweenDates">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  🗄️
                </span>
               Orders between dates
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

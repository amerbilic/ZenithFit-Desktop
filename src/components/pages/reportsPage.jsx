import React from 'react'
import { Link } from 'react-router-dom'
import BackChevronLink from '../atoms/backChevronLink'

class UsersPage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="u-t-center d-flex flex-column">
          <div className="heading d-flex flex-row">
            <BackChevronLink to="/" />
            <h1>Users Admin Panel</h1>
          </div>
          <div className="menu-wrapper">
            <Link to="/userAdd">
              <button type="button" className="btn-chunky">
                <span role="img" className="button-icon">
                  ⚙
                </span>
                Top 10 Customers
              </button>
            </Link>
            <Link to="/userList">
              <button type="button" className="btn-chunky">
                <span role="img" className="button-icon">
                  🗄️
                </span>
                Top 10 Articles
              </button>
            </Link>
            <Link to="/userList">
              <button type="button" className="btn-chunky">
                <span role="img" className="button-icon">
                  🗄️
                </span>
               Articles with best ratings
              </button>
            </Link>
            <Link to="/userList">
              <button type="button" className="btn-chunky">
                <span role="img" className="button-icon">
                  🗄️
                </span>
               Orders between dates
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default UsersPage

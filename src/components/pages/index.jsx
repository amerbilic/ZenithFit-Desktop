import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.PureComponent {
  render() {
    return (
      <div className="u-t-center">
        <h1>ZenithFit Admin Panel</h1>
        <div className="menu-wrapper">
          <Link to="/users">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">⚙</span>
               Users
            </button>
          </Link>
          <Link to="/products">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">🗄️</span>
               Products
            </button>
          </Link>
          <Link to="/orders">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">🛍️</span>
               Orders
            </button>
          </Link>
          <Link to="/reports">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">🛍️</span>
              Reports
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Index;
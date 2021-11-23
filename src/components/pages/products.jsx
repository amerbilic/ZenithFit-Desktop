import React from 'react'
import { Link } from 'react-router-dom'
import BackChevronLink from '../atoms/backChevronLink'

class ProductsPage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="u-t-center d-flex flex-column">
          <div className="heading d-flex flex-row">
            <BackChevronLink to="/" />
            <h1>Products Admin Panel</h1>
          </div>
          <div className="menu-wrapper">
            <Link to="/productAdd">
              <button type="button" className="btn-chunky">
                <span role="img" className="button-icon">
                  ⚙
                </span>
                New Product
              </button>
            </Link>
            <Link to="/productList">
              <button type="button" className="btn-chunky">
                <span role="img" className="button-icon">
                  🗄️
                </span>
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsPage

import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

class ProductsPage extends React.PureComponent {
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
            <h1 className="mainTitle">Products Admin Panel</h1>
          </div>
          <div className="menu-wrapper">
            <Link to="/productAdd">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  ⚙
                </span>
                New Product
              </button>
            </Link>
            <Link to="/productList">
              <button type="button" className="btn-chunky btn-dark">
                <span role="img" className="button-icon">
                  🗄️
                </span>
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      </motion.div>
    )
  }
}

export default ProductsPage

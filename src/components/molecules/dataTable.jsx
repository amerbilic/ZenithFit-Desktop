import React from 'react'
import PropTypes from 'prop-types'

const DataTable = ({ children }) => (
  <table className="dataTable">
    <tbody>{children}</tbody>
  </table>
)

DataTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

DataTable.defaultProps = {
  children: {}
}

export default DataTable

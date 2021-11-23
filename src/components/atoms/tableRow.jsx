import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ fields }) => {
  return (
    <tr>
      {fields.map(field => (
        <td>{field}</td>
      ))}
    </tr>
  )
}

TableRow.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any)
}

TableRow.defaultProps = {
  fields: ['']
}

export default TableRow

import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ fields }) => {
  return (
    <tr className="bg-secondary bg-gradient">
      {fields.map(field => (
        <td key ={Math.random()} className="fc-red">{field}</td>
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

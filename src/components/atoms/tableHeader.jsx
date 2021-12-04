import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ headings }) => (
  <tr>
    {headings.map((heading) => (
      <th className="bg-dark" key={heading}>
        {heading}
      </th>
    ))}
  </tr>
);

TableHeader.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
};

TableHeader.defaultProps = {
  headings: [''],
};

export default TableHeader;
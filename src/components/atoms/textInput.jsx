import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ text, name, id, value, onChange }) => (
  <div className="input-wrapper">
    <label htmlFor={id}>{text}</label>
    <input type="text" name={name} id={id} value={value} onChange={onChange} />
    <br />
  </div>
)

TextInput.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

TextInput.defaultProps = {
  text: '',
  name: '',
  id: '',
  value: '',
  onChange: () => {}
}

export default TextInput

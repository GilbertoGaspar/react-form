import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

export default function FormInput({
  type,
  name,
  children,
  required,
  value,
  id,
  pattern,
  onInvalid,
  isPasswordHidden = true,
  flexGrow = 'initial',
  onChange
}) {
  return (
    <input
      className='form__input'
      style={{ flexGrow: flexGrow }}
      type={isPasswordHidden ? type : 'text'}
      name={name}
      id={id}
      pattern={pattern}
      onInvalid={onInvalid}
      placeholder={children}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onInvalid: PropTypes.func,
  pattern: PropTypes.string,
  isPasswordHidden: PropTypes.bool,
  flexGrow: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

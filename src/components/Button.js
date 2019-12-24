import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  onClick,
  form = null,
  buttonStyle = null,
  children
}) {
  return (
    <button
      form={form}
      className={`button` + (buttonStyle ? ` button--${buttonStyle}` : '')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  form: PropTypes.string,
  buttonStyle: PropTypes.string
};

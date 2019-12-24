import React from 'react';
import PropTypes from 'prop-types';
import './FormGroup.css';

export default function FormGroup({ children, customStyle = {} }) {
  return (
    <div className={`form__group`} style={customStyle}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  customStyle: PropTypes.object
};

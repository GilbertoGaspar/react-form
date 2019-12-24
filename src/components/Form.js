import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

function Form({ title, id, onSubmit, children }) {
  return (
    <form id={id} className='form' onSubmit={onSubmit}>
      <h2 className='form__title'>{title}</h2>
      {children}
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;

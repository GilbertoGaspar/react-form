import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import FormInput from './components/FormInput';
import FormGroup from './components/FormGroup';
import Button from './components/Button';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleInputChange = (e, setInputState) => {
    setInputState(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === passwordConfirm) {
      alert('Form submitted!');
    } else {
      alert('Passwords do not match!');
      setPassword('');
      setPasswordConfirm('');
      document.getElementById('password').focus();
    }
  };

  const handleShowPassword = e => {
    e.preventDefault();
    setIsPasswordHidden(state => !state);
  };

  const handleSignInButton = e => {
    e.preventDefault();
    const isLeaving = window.confirm('Are you sure you want to leave?');
    if (isLeaving) {
      alert('Leaving page!');
    }
  };

  return (
    <div className='App'>
      <Form
        id='myForm'
        title='Create your Company Account'
        onSubmit={handleSubmit}
        size={'auto'}
      >
        <FormGroup>
          <FormInput
            type='text'
            name='first name'
            id='firstName'
            onChange={e => handleInputChange(e, setFirstName)}
            required={true}
            flexGrow={1}
            value={firstName}
          >
            First name
          </FormInput>
          <FormInput
            type='text'
            name='last name'
            id='lastName'
            onChange={e => handleInputChange(e, setLastName)}
            required={true}
            flexGrow={1}
            value={lastName}
          >
            Last name
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormInput
            type='email'
            name='email'
            id='email'
            onChange={e => handleInputChange(e, setEmail)}
            required={true}
            flexGrow={2}
            value={email}
          >
            Email
          </FormInput>
        </FormGroup>
        <FormGroup customStyle={{ justifyContent: 'space-between' }}>
          <FormInput
            type='password'
            name='password'
            id='password'
            isPasswordHidden={isPasswordHidden}
            onChange={e => {
              e.target.setCustomValidity('');
              handleInputChange(e, setPassword);
            }}
            pattern='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
            onInvalid={e =>
              e.target.setCustomValidity(
                'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.'
              )
            }
            required={true}
            flexGrow={1}
            value={password}
          >
            Password
          </FormInput>
          <FormInput
            type='password'
            name='password confirm'
            id='passwordConfirm'
            isPasswordHidden={isPasswordHidden}
            onChange={e => {
              e.target.setCustomValidity('');
              handleInputChange(e, setPasswordConfirm);
            }}
            pattern='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
            required={true}
            flexGrow={1}
            value={passwordConfirm}
          >
            Confirm
          </FormInput>
          <Button onClick={handleShowPassword}>
            {isPasswordHidden ? 'Show Password' : 'Hide Password'}
          </Button>
        </FormGroup>
        <FormGroup customStyle={{ justifyContent: 'space-between' }}>
          <Button buttonStyle='transparent' onClick={handleSignInButton}>
            Sign-in Instead
          </Button>
          <Button form='myForm'>Register</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;

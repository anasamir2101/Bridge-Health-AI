import React, { useState } from 'react';
import mainimg from '../assets/attachment1.png';
import logo from '../assets/titlepagelogo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Entered Username:', username);
    console.log('Entered Password:', password);

    const lowercasedUsername = username.toLowerCase();
    const lowercasedPassword = password.toLowerCase();

    console.log('Lowercased Username:', lowercasedUsername);
    console.log('Lowercased Password:', lowercasedPassword);

    if (lowercasedUsername === username && lowercasedPassword === password) {
      navigate('/full-dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <div className='main'>
        <div className='left-side'>
          <div className='logo-div'>
            <img src={logo} alt='logo' className='logo' />
            <p className='information'>
              <span>Bridge HealthAI</span>
              is here to help you and your patients navigate all their
              health-related needs
            </p>
          </div>

          <div className='input-fields'>
            <div className='first-field'>
              <h1 className='label'>Username</h1>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='second-field'>
              <h1 className='label'>Password</h1>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='login-btn-div'>
            <button className='login-btn' onClick={handleLogin}>
              Login
            </button>
            <a href='' className='forgot'>
              Forgot Password
            </a>
          </div>

          <div className='remember-div'>
            <input type='checkbox' id='rememberCheckbox' className='checkbox' />
            <h1 className='remember'>Remember me</h1>
          </div>
          <div className='create-btn-div'>
            <p className='line'></p>
            <button className='create-btn'>Create Account</button>
          </div>
        </div>
        <div className='right-side'>
          <img className='main-img' src={mainimg} />
        </div>
      </div>
    </>
  );
};

export default Login;

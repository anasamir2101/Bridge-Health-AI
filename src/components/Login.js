import React from 'react';
import mainimg from '../assets/attachment1.png';
import logo from '../assets/titlepagelogo.png';

const Login = () => {
  return (
    <>
      <div className='main'>
        <div className='left-side'>
          <div className=''>
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
              <input type='text' />
            </div>
            <div className='second-field'>
              <h1 className='label'>Password</h1>
              <input type='text' />
            </div>
          </div>
          <div className='btn-div'>
            <button className='login-btn'>Login</button>
            <a href='' className='forgot'>
              Forgot Password
            </a>
            <div className='remember-div'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='33'
                height='30'
                viewBox='0 0 33 30'
                fill='none'
              >
                <path
                  d='M2.96934 29.0471C2.17773 29.0471 1.52748 28.8233 1.01859 28.3757C0.509695 27.9281 0.255249 27.3562 0.255249 26.66V2.78901C0.255249 2.09278 0.509695 1.52087 1.01859 1.07329C1.52748 0.625707 2.17773 0.401917 2.96934 0.401917H30.1102C30.9018 0.401917 31.5521 0.625707 32.061 1.07329C32.5698 1.52087 32.8243 2.09278 32.8243 2.78901V26.66C32.8243 27.3562 32.5698 27.9281 32.061 28.3757C31.5521 28.8233 30.9018 29.0471 30.1102 29.0471H2.96934ZM25.9543 9.9503L22.9009 7.56321L14.3346 16.664L9.83937 12.7104L7.12528 15.0975L14.6738 21.7366L25.9543 9.9503Z'
                  fill='#166154'
                />
              </svg>
              <h1 className='remember'>Remember me</h1>
            </div>
            <div>
              <p className='line'></p>
              <button className='create-btn'>Create Account</button>
            </div>
          </div>
        </div>
        <div>
          <img className='main-img' src={mainimg} />
        </div>
      </div>
    </>
  );
};

export default Login;

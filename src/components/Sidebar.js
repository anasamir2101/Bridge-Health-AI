import React from 'react';
import logo from '../assets/bridgehealthAI logo white 1.png';
import { MdDashboard } from 'react-icons/md';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { BsChatLeftDots } from 'react-icons/bs';
import { GrResources } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { BiSolidHelpCircle } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='links-main'>
          <div className='sidebar-links'>
            <ul>
              <li>
                <MdDashboard className='sidebar-icon' />
                <a href='/full-dashboard'>Patient Dashboard </a>
              </li>
              <li>
                <BsChatLeftDots className='sidebar-icon' />
                <a href='/chat'>Chat with Bridget </a>
              </li>
              <li className='notification'>
                <MdOutlineNotificationAdd className='sidebar-icon' />

                <a href=''>Notifications </a>
              </li>
              <li>
                <GrResources className='sidebar-icon' />

                <a href=''>Resource Directory</a>
              </li>
            </ul>
          </div>
          <div id='footer-links' className='footer-links sidebar-links '>
            <ul>
              <li>
                <FiSettings className='sidebar-icon' />
                <a href=''>Settings </a>
              </li>
              <li>
                <BiSolidHelpCircle className='sidebar-icon' />
                <a href=''>Help </a>
              </li>
              <li className='notification'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='42'
                  height='42'
                  viewBox='0 0 42 42'
                  fill='none'
                  className='sidebar-icon'
                >
                  <path
                    d='M21.0003 0C15.4307 0 10.0892 2.21252 6.15084 6.15084C2.21252 10.0892 0 15.4307 0 21.0003C0 32.5986 9.4024 41.9995 21.0003 41.9995C26.5697 41.9995 31.9111 39.787 35.8493 35.8488C39.7875 31.9106 42 26.5692 42 20.9998C42 15.4303 39.7875 10.0889 35.8493 6.1507C31.9111 2.21249 26.5697 0 21.0003 0ZM18.9143 9.93886C18.9156 9.3864 19.1359 8.85702 19.5271 8.46683C19.9182 8.07664 20.4481 7.85751 21.0005 7.85751C21.553 7.85751 22.0829 8.07664 22.474 8.46683C22.8651 8.85702 23.0855 9.3864 23.0868 9.93886V16.1606C23.0855 16.7131 22.8651 17.2425 22.474 17.6326C22.0829 18.0228 21.553 18.242 21.0005 18.242C20.4481 18.242 19.9182 18.0228 19.5271 17.6326C19.1359 17.2425 18.9156 16.7131 18.9143 16.1606V9.93886ZM21.0003 31.6726C18.5099 31.6729 16.0981 30.8007 14.184 29.2076C12.2699 27.6144 10.9745 25.4009 10.5228 22.9518C10.0712 20.5027 10.4919 17.9728 11.7118 15.8017C12.9318 13.6306 14.8738 11.9555 17.2005 11.0675V14.9154C15.8715 15.7414 14.8478 16.9779 14.2843 18.4377C13.7209 19.8975 13.6484 21.5011 14.0779 23.0058C14.5073 24.5105 15.4154 25.8343 16.6645 26.7767C17.9136 27.7192 19.4358 28.229 21.0005 28.229C22.5653 28.229 24.0875 27.7192 25.3366 26.7767C26.5857 25.8343 27.4937 24.5105 27.9232 23.0058C28.3527 21.5011 28.2802 19.8975 27.7167 18.4377C27.1533 16.9779 26.1296 15.7414 24.8006 14.9154V11.0675C27.127 11.9557 29.0688 13.6309 30.2886 15.802C31.5083 17.9731 31.9288 20.5029 31.4772 22.9519C31.0255 25.4009 29.7301 27.6142 27.8162 29.2073C25.9022 30.8005 23.4905 31.6728 21.0003 31.6726Z'
                    fill='white'
                  />
                </svg>

                <a href=''>Logout </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

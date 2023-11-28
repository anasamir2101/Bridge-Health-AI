import React from 'react';
import Image1 from '../assets/Ellipse 22.png';
import { CiSearch } from 'react-icons/ci';
const Search = () => {
  return (
    <>
      <div className='search-bar'>
        <div className='search1'>
          <div className='search-field'>
            <CiSearch className='search-icon' />
            <input type='search' placeholder='Search' />
          </div>
        </div>
        <div className='Image-field'>
          <div>
            <h1>Donna Stroupe</h1>
            <p>Social Worker</p>
          </div>
          <img src={Image1} alt='image' />
        </div>
      </div>
    </>
  );
};

export default Search;

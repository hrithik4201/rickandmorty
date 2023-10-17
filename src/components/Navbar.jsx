import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

import '../styles/Navbar.css';

function Navbar({ onSearch }) {
  return (
    <div className='navbar'>
      <div className='logo'>Rick and Morty Characters</div>
      <div className='search-bar-wrapper'>
        <div className='search-icon'>
          <HiOutlineSearch />
        </div>
        <input
          type='text'
          placeholder='Search by name'
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Navbar;

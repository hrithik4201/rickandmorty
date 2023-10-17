import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className='pagination-container'>
      <button
        className='arrow-btn'
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      <span className='pagination-text'>
        {' '}
        Page {currentPage} of {totalPages}{' '}
      </span>
      <button
        className='arrow-btn'
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;

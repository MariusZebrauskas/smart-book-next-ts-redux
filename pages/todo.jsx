import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
const todo = () => {
  return (
    <section>
      <Header />
      <SearchInput />
      <div className='container flex justify-center'>
        <ul
          className='text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 
      rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white
      w-2/3
      '
        >
          <li className='w-full px-4 flex justify-between py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <span>1. Profile</span>
            <span style={{ color: '#111827' }}>X</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default todo;

import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
const todo = () => {
  // FIXME:: inputs are not responsive
  return (
    <section>
      <Header />
      <SearchInput />
      <div className='container flex justify-center'>
        <ul
          className='text-sm font-medium text-gray-900  border-gray-200 
      rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white
      w-2/3 mb-20
      '
        >
          {/* text properties css */}
          <li className='w-full bg-gray-200  px-4 flex mb-4 justify-between py-2 border-b 
     rounded-t-lg border-gray-600'>
            <span className='px-2.5 py-2 text-base '>1. Profile</span>
            <span className=' cursor-pointer px-2.5 py-2 text-base ' style={{ color: '#111827' }}>
              X
            </span>
          </li>
         

       
        </ul>
      </div>
    </section>
  );
};

export default todo;

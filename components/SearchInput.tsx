import React from 'react';

const SearchInput = () => {
  return (
    <div className='flex justify-center mt-20 w-full '>
      <div className='mb-3 xl:w-96  w-full'>
        <div className='relative flex  items-stretch w-full mb-4 rounded '>
          <input
            type='search'
            className='form-control relative flex-auto min-w-0  w-full px-3 py-1.5 text-base font-normal 
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Add a todo!'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
          <button
            type='button'
            className='px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight 
            uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 
            transition duration-150 ease-in-out'
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

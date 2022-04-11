import React from 'react';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import SearchInput from '../../components/SearchInput';
const todo = () => {
  return (
    <section>
      <Header />
      <div className=' flex justify-center flex-col mb-40 w-full'>
        <SearchInput />

        <ul
          className='text-sm font-medium text-gray-900  border-gray-200 
      rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white
      mb-20 flex justify-center flex-col items-center
      '
        >
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    </section>
  );
};

export default todo;

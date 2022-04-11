import React from 'react';

const ListItem = () => {
  return (
    <li
      className=' bg-gray-200  px-4 flex mb-4 justify-between py-2 border-b 
     rounded-t-lg border-gray-600 lg:w-2/4 w-4/5'
    >
      <span className='px-2.5 py-2 text-base flex flex-wrap break-words '>
        1. ssdfsfsfsdf s fsd  sf sfd sfs fsfsfsfsdfddsf     sdfdsfsdfsdfsdfsdf
      </span>
      <span className=' cursor-pointer px-2.5 py-2 text-base flex justify-center items-center  ' style={{ color: '#111827' }}>
        X
      </span>
    </li>
  );
};

export default ListItem;

import React from 'react';

const DynamicCards = ({ card }) => {
  return (
    <div
      className='max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800
         hover:cursor-pointer
        '
    >
      <div className='px-4 py-2'>
        <h1 className='text-lg sm:text-2xl font-bold text-gray-800 uppercase dark:text-white'>{card.name}</h1>
      </div>
      <img className='imageForDashboard' src={card.image} alt={card.alt} />
    </div>
  );
};

export default DynamicCards;

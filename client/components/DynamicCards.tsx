import Link from 'next/link';
import React from 'react';


type Card = {
  card: {
    id: number;
    name: string;
    image: string;
    alt: string;
    page: string;
  }
}

const DynamicCards: React.FC<Card> = ({ card }) => {
  return (
    <Link key={card.id} href={card.page}>
      <div
        className='max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800
      hover:cursor-pointer
        '
      >
        <div className='px-4 py-2'>
          <h1 className='text-lg sm:text-2xl font-bold text-gray-800 uppercase dark:text-white'>
            {card.name}
          </h1>
        </div>
        <img className='imageForDashboard' src={card.image} alt={card.alt} />
      </div>
    </Link>
  );
};

export default DynamicCards;

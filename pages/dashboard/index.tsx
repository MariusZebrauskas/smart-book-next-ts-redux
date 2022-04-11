import React from 'react';
import DynamicCards from '../../components/DynamicCards';
import { dashbordCards } from '../../objects/dasbordCards';



const dashboard = () => {
  return (
    <section className='w-full flex justify-center items-center   '>
      <main className='flex mt-20 lg:mt-40 justify-around flex-wrap gap-10 max-w-7xl w-3/5 mb-20 '>
        {dashbordCards.map((card) => {
          return <DynamicCards card={card} />;
        })}
      </main>
    </section>
  );
};

export default dashboard;

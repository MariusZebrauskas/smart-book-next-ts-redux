import React from 'react';
import Day from '../../components/Day';
import RoutineHeader from '../../components/RoutineHeader';
import { sevenDays } from '../../objects/sevendays';

const routine = () => {
  return (
    <>
      <RoutineHeader />
      <div className='flex flex-col '>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8 '>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-x-auto'>
              <table className='min-w-full '>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Time
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Monday
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Tuesday
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Wendesday
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Thursday
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Friday
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Saturday
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Sunday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sevenDays.map((day: any) => {
                    return <Day key={day.id} day={day} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default routine;

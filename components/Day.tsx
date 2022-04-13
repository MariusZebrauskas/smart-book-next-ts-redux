import React from 'react';

type Props = {
  day: any;
};

const Day = ({ day }: Props) => {
  console.log('day:', day);
  return (
    <tr className='border-b'>
      <td className='px-2 py-4 whitespace-wrap text-sm font-medium text-gray-900 w-6'>
        {day.time}
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.monday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.tuesday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.wendesday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.thursday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.friday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.saturday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
      <td
        className='text-sm text-stone-900 font-normal px-6 py-4
                      whitespace-wrap w-6 
                      order-slate-200 border-2
                      relative
                      '
      >
        {day.sunday}
        <span className='absolute right-0 top-0 text-xs text-gray-500 '>{day.time}</span>
      </td>
    </tr>
  );
};

export default Day;

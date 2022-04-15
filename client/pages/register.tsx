import React from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { closeSubmenu } from '../redux/submenuReducer';

interface T extends DefaultRootState {
  submenu: boolean;
}
const register = () => {




  
    const submenu = useSelector<T>((store) => store.submenu);
  
    const dispach = useDispatch();
  
    // close menu if click out of menu
    const onMouseEnter = () => {
      if (submenu) {
        dispach(closeSubmenu());
      }
    };






  return (
    <section onMouseEnter={onMouseEnter} className='max-w-4xl mt-20 mb-40 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
      <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
        Account settings
      </h2>

      <form>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-gray-700 dark:text-gray-200' >
              Username
            </label>
            <input
              id='username'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              Email Address
            </label>
            <input
              id='emailAddress'
              type='email'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200' >
              Password
            </label>
            <input
              id='password'
              type='password'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200' >
              Password Confirmation
            </label>
            <input
              id='passwordConfirmation'
              type='password'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default register;

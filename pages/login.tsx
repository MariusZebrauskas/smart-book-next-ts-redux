import Link from 'next/link';
import React from 'react';

const login = () => {
  return (
    <section className='max-w-md mt-20 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
      <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
        Account Login
      </h2>

      <form>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1'>
          <div>
            <label className='text-gray-700 dark:text-gray-200' for='emailAddress'>
              Email Address
            </label>
            <input
              id='emailAddress'
              type='email'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200' for='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <Link href='/dashboard'>
            <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Login
            </button>
          </Link>
        </div>
        <div className='flex justify-start mt-6'>
          <p>Dont have an account ? </p>
          <Link href='/register'>
            <a class='hover:underline text-cyan-600 ml-2'>Register</a>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default login;

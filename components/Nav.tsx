import { gsap } from 'gsap';
import Link from 'next/link';
import React from 'react';
import { FcMindMap } from 'react-icons/fc';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { closeMenu, openMenu } from '../redux/menuRedux';
import { calendar, contact, home, todo } from '../redux/pageReducer';
interface T extends DefaultRootState {
  menu: boolean;
  submenu: boolean;
  page: string;
}
export const Nav = () => {
  // avatar
  const menu = useSelector<T>((store) => store.menu);
  const page = useSelector<T>((store) => store.page);
  console.log('page:', page);
  //   submenu controler
  const subMmenu = useSelector<T>((store) => store.submenu);
  //   dispach function
  const dispatch = useDispatch();

  const avatar = () => {
    //   avatar animation
    if (menu) {
      gsap.to('.avatar-GSAP', { y: 32, duration: 0.2, opacity: 0, display: 'none' });
      return dispatch(closeMenu());
    } else if (!menu) {
      gsap.to('.avatar-GSAP', { y: 0, duration: 0.3, opacity: 1, display: 'block' });
      return dispatch(openMenu());
    }
  };

  const burger = () => {
    //   open close sub menu
    if (subMmenu) {
      gsap.to('.submenuGSAP', { y: 8, duration: 0.2, opacity: 0, display: 'none' });
      return dispatch(closeMenu());
    } else if (!subMmenu) {
      gsap.to('.submenuGSAP', { y: 0, duration: 0.3, opacity: 1, display: 'block' });
      return dispatch(openMenu());
    }
  };

  const changePageMenuBackground = (params: string) => {
    //   change background to dark on page select
    if (params === 'home') {
      return dispatch(home());
    } else if (params === 'todo') {
      return dispatch(todo());
    } else if (params === 'calendar') {
      return dispatch(calendar());
    } else if (params === 'contact') {
      return dispatch(contact());
    }
  };

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={burger}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 
              hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 
              focus:ring-inset focus:ring-white
              '
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <FcMindMap className='block  h-8 w-auto mr-2 ' />
              <h4 className='font-extrabold logo  tracking-wider text-xl font-mono text-white'>
                SmartBook
              </h4>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link href='/'>
                  <a
                    onClick={() => changePageMenuBackground('home')}
                    className={
                      page === 'home'
                        ? 'bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium'
                        : ' text-gray-300 px-3 py-2 rounded-md text-sm font-medium'
                    }
                    aria-current='page'
                  >
                    Home
                  </a>
                </Link>

                <a
                  onClick={() => changePageMenuBackground('todo')}
                  className={
                    page === 'todo'
                      ? 'bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium'
                      : ' text-gray-300 px-3 py-2 rounded-md text-sm font-medium'
                  }
                >
                  Todo
                </a>

                <a
                  onClick={() => changePageMenuBackground('calendar')}
                  className={
                    page === 'calendar'
                      ? 'bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium'
                      : ' text-gray-300 px-3 py-2 rounded-md text-sm font-medium'
                  }
                >
                  Calendar
                </a>
                <Link href='/contact'>
                  <a
                    onClick={() => changePageMenuBackground('contact')}
                    className={
                      page === 'contact'
                        ? 'bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium'
                        : ' text-gray-300 px-3 py-2 rounded-md text-sm font-medium'
                    }
                  >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className=' absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              type='button'
              className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='sr-only'>View notifications</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
            {/* avatar */}
            <div className='ml-3 relative'>
              <div onClick={avatar}>
                <button
                  type='button'
                  className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>
              {/* sub avatar */}
              <div
                className='avatar-GSAP origin-top-right absolute right-0 mt-2 w-48 
                rounded-md shadow-lg py-1 bg-white ring-1
                 ring-black ring-opacity-5 focus:outline-none
                 translate-y-8
                 opacity-0

                 
                 '
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
              >
                <a
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  id='user-menu-item-0'
                >
                  Your Profile
                </a>
                <a
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  id='user-menu-item-1'
                >
                  Settings
                </a>
                <a
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  id='user-menu-item-2'
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      <div className='  sm:hidden' id='mobile-menu'>
        <div className='submenuGSAP px-2 pt-2 pb-3 space-y-1'>
          <Link href='/'>
            <a
              className=' text-white block px-3 py-2 rounded-md text-base font-medium'
              aria-current='page'
            >
              Home
            </a>
          </Link>

          <a className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
            Todo
          </a>

          <a className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
            Calendar
          </a>
          <Link href='/contact'>
            <a className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

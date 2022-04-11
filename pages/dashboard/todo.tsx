import React, { useEffect } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import SearchInput from '../../components/SearchInput';
import { todoPage } from '../../redux/pageReducer';
import { closeSubmenu } from '../../redux/submenuReducer';




interface T extends DefaultRootState {
  submenu: boolean;
}




const todo = () => {
  // redux variables
  const dispatch = useDispatch();
  const submenu = useSelector<T>((store) => store.submenu);
  
  // set homepage varaibles
  useEffect(() => {
    dispatch(todoPage());
  }, []);


  const onMouseEnter = () => {
    if (submenu) {
      dispatch(closeSubmenu());
    }
  };

  return (
    <section onMouseEnter={onMouseEnter}>
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

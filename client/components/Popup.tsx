import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoList } from '../redux/todoReducer';

type Props = {
  text: string;
  id: number;
};

const Popup = ({ text, id }: Props) => {
  const [editeText, setEditeText] = useState(text);

  let dispatch = useDispatch();

  const changeText = () => {
    console.log('clicked');
    let obj = {
        editeText,
        id: id,
    };
    dispatch(changeTodoList(obj))
  };
  return (
    <div className='absolute top-0  left-0 right-0 flex justify-between p-3'>
      <input
        type='search'
        className='form-control relative flex-auto min-w-0  w-full px-3 py-1.5 text-base font-normal 
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none width-full'
        placeholder='Edite a todo!'
        aria-label='Search'
        aria-describedby='button-addon2'
        value={editeText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditeText(e.target.value)}
      />
      <button
        onClick={changeText}
        type='button'
        className='px-6 py-2 border-2 cursor-pointer border-gray-800
         hover:text-gray-800 text-white font-medium text-xs leading-tight 
            uppercase rounded hover:bg-grey-400 hover:bg-opacity-5
            focus:outline-none focus:ring-0 
            transition duration-150 bg-black ease-in-out z-10'
    
      >
        Edite
      </button>
    </div>
  );
};

export default Popup;

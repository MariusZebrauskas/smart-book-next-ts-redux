import React, { useRef } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { addNewTodo } from '../redux/todoReducer';

interface T extends DefaultRootState {
  todo: {
    payload: {
      id: number;
      text: string;
      compleated: boolean;
    }[];
  };
}

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const todo: any = useSelector<T>((store) => store.todo);
  const store = useSelector<T>((store) => store);
  const dispach = useDispatch();
  // add todo
  const onClick = () => {
    // create new todo
    let newTodo: any = {
      id: todo.length + 1,
      text: ref.current?.value,
      compleated: false,
      edite: false,
    };

    // pass new todo
    dispach(addNewTodo({ newTodo: newTodo }));
    // clean input value
    if (ref.current) {
      ref.current.value = null!;
    }
    return;
  };

  // FIXME: STATE NOT PERSIST PER PAGE
  // FIXME: PAYLOAD WHAT IT IS ????
  // FIXME: WHY PAYLOAD ALLWAYS ADDS UP ON TOP

  return (
    <div className='flex justify-center mt-20 w-full '>
      <div className='mb-3 lg:w-2/4 w-4/5 '>
        <div className='relative flex  items-stretch w-full mb-4 rounded '>
          <input
            ref={ref}
            type='search'
            className='form-control relative flex-auto min-w-0  w-full px-3 py-1.5 text-base font-normal 
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Add a todo!'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
          <button
            type='button'
            className='px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight 
            uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 
            transition duration-150 ease-in-out'
            onClick={onClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

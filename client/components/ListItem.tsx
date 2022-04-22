import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropsTypes } from '../pages/dashboard/todo';
import { delteTask, popUpEdite } from '../redux/todoReducer';
import Popup from './Popup';

const ListItem = ({ todo }: any) => {
  const todoList: any = useSelector<any>((store) => store.todo);
  console.log('todoList:', todoList)
  const dispatch = useDispatch();

  let getIndex = todoList.findIndex((item: any) => {
    return item.text === todo.text;
  });
  let itemId = getIndex;


  const deleteTodo = (text: string) => {
    // send text to redux wich need to telete
    dispatch(delteTask(text));
  };

  const popUpEditeTodo = (e: number) => {
    // get correct id


    //
    return dispatch(popUpEdite(e));
  };

  return (
    <li
      className=' bg-gray-200  px-4 flex mb-4 justify-between py-2 border-b 
     rounded-t-lg border-gray-600 lg:w-2/4 w-4/5 relative'
    >
      <span
        onClick={() => popUpEditeTodo(itemId)}
        className='px-2.5 py-2 text-base flex cursor-pointer flex-wrap break-words '
      >
        {todo.text}
      </span>
      {todoList[itemId].edite === false &&  <span
        className=' cursor-pointer px-2.5 py-2 text-base flex justify-center items-center  '
        style={{ color: '#111827' }}
        // onClick={() => deleteTodo(todo.text)}
        onClick={() => deleteTodo(todo)}
      >
        X
      </span>}
      

      {todoList[itemId] && todoList[itemId].edite === true ? (
        <Popup id={itemId} text={todo.text} />
      ) : null}
    </li>
  );
};

export default ListItem;

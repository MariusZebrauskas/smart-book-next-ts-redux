import React, { useEffect, useState } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import AddTodo from '../../components/SearchInput';
import { todoPage } from '../../redux/pageReducer';
import { closeSubmenu } from '../../redux/submenuReducer';

import { userTodos } from '../../objects/todosObj';
import { fechTodos } from '../../redux/todoReducer';

interface T extends DefaultRootState {
  submenu: boolean;
  todo: {
    payload: {
      id: number;
      text: string;
      compleated: boolean;
    }[];
  };
}

export type PropsTypes = {
  todo: {
    id: number;
    text: string;
    compleated: boolean;
    edite: boolean;
  };
};

type Todo = {
  id: number;
  text: string;
  compleated: boolean;
  edite: boolean;
};

const todo = () => {
  // redux variables
  const dispatch = useDispatch();
  const submenu = useSelector<T>((store) => store.submenu);
  const todo: any = useSelector<T>((store) => store.todo);
  const store = useSelector<T>((store) => store);

  const [editeTodoValue, setEditeTodoValue] = useState(null);

  // on page loads
  useEffect(() => {
    // set homepage varaibles
    dispatch(todoPage());

    // get all todos from dummy data
    let data: any = userTodos;
    dispatch(fechTodos(data));
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
        <AddTodo />

        <ul
          className='text-sm font-medium text-gray-900  border-gray-200 
      rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white
      mb-20 flex justify-center flex-col items-center
      '
        >
          {todo &&
            todo.map((todo: Todo) => {
              return <ListItem key={Math.random()} todo={todo} />;
            })}
        </ul>
      </div>
    </section>
  );
};

export default todo;

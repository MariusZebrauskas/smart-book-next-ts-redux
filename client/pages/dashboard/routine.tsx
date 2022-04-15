import React, { useEffect, useState } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import Day from '../../components/Day';
import PopUpdate from '../../components/PopUpdate';
import RoutineHeader from '../../components/RoutineHeader';
import { sevenDays } from '../../objects/sevendays';
import { getDataForSevenDays, updateDataForSevenDays } from '../../redux/sevenDaysReducer';

interface T extends DefaultRootState {
  sevenDays: {
    time: string;
    id: number;
    monday: {
      id: number;
      message: string;
      day: string;
      parenTime: string;
    }[];
  };
}
const routine = () => {
  // redux
  const dispatch = useDispatch();
  const days: any = useSelector<T>((state) => state.sevenDays);

  // state to pop up screen
  const [openPopUp, setOpenPopUp] = useState(false);

  const [dataToUpdate, setDataToUpdate] = useState<any>(null);

  const popUpWindow = (params: string, dataFromScreen: any) => {
    if (params === 'pop') {
      setDataToUpdate(dataFromScreen);
      return setOpenPopUp(true);
    } else if (params === 'cancel') {
      return setOpenPopUp(false);
    } else if (params === 'submit') {
      // day in object
      let dayObj = dataToUpdate.day.toLowerCase();
      // index in object
      let index: any = days.findIndex((oneDay: any) => {
        return oneDay[dayObj].id === dataToUpdate.id;
      });
      // message to update
      let message = dataToUpdate.message;

      // final obj
      let update = {
        index: index,
        day: dayObj,
        message: message,
      };

      dispatch(updateDataForSevenDays(update));
    }
  };
  // on page load
  useEffect(() => {
    if (sevenDays) {
      dispatch(getDataForSevenDays(sevenDays));
    }
  }, []);
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
                  {days &&
                    days.map((day: any) => {
                      return <Day popUpWindow={popUpWindow} key={Math.random()} day={day} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openPopUp ? (
        <PopUpdate
          setDataToUpdate={setDataToUpdate}
          dataToUpdate={dataToUpdate}
          popUpWindow={popUpWindow}
        />
      ) : null}
    </>
  );
};

export default routine;

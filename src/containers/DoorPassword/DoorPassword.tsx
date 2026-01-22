import {useDispatch, useSelector} from 'react-redux';
import {
    addNumbersToPin,
    checkPin,
    removeNumbersFromPin,
    reset
} from './DoorPasswordSlice.ts';
import type {RootState} from '../../app/store.ts';
import PadScreen from '../../components/PadScreen/PadScreen.tsx';
import {useEffect} from 'react';


const DoorPassword = () => {
    const {enteredPin, status} = useSelector((state: RootState) => state.pinPad);
    const dispatch = useDispatch();

    const pressedButtons = (btn: string) => {
      if (btn === '<') {
          dispatch(removeNumbersFromPin());
      } else if (btn === 'E') {
          dispatch(checkPin());
      } else {
          dispatch(addNumbersToPin(btn))
      }
    };

    const renderDisplay = () => {
        if (status === 'granted') return 'Access Granted';
        if (status === 'denied') return 'Access Denied';
        return '*'.repeat(enteredPin.length);
    };

    useEffect(() => {
        if (status === 'granted' || status === 'denied') {
            const timer = setTimeout(() => {
                dispatch(reset());
            }, 1500);

            return () => clearTimeout(timer);
        }
    },[status, dispatch]);

    return (
        <>
            <PadScreen text={renderDisplay()} pressButton={pressedButtons} className={status} />
        </>
    );
};

export default DoorPassword;
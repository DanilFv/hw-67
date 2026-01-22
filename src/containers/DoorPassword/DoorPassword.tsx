import {useDispatch, useSelector} from 'react-redux';
import {
    addNumbersToPin,
    checkPin,
    removeNumbersFromPin
} from './DoorPasswordSlice.ts';
import type {RootState} from '../../app/store.ts';
import PadScreen from '../../components/PadScreen/PadScreen.tsx';


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

    return (
        <>
            <PadScreen text={renderDisplay()} pressButton={pressedButtons} className={status} />
        </>
    );
};

export default DoorPassword;
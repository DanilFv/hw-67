import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {CORRECT_PIN} from '../../Constants.ts';

interface DoorPasswordSlice {
    enteredPin: string;
    status: string;
}

const initialState: DoorPasswordSlice = {
    enteredPin: '',
    status: 'idle',
};

export const doorSlice = createSlice({
    name: 'pinPad',
    initialState,
    reducers: {
        addNumbersToPin: (state, action: PayloadAction<string>) => {
            if (state.enteredPin.length < 4 && state.status === 'idle') {
                state.enteredPin += action.payload;
            }
        },

        removeNumbersFromPin: (state) => {
            state.enteredPin = state.enteredPin.slice(0,-1);
        },

        checkPin: (state) => {
            if (state.enteredPin === CORRECT_PIN) {
                state.status = 'granted';
            } else {
                state.status = 'denied';
            }
        },

        reset: (state) => {
            state.enteredPin = '';
            state.status = 'idle';
        }

    }
});

export const {addNumbersToPin, removeNumbersFromPin, checkPin, reset} = doorSlice.actions;
export const doorReducer = doorSlice.reducer;
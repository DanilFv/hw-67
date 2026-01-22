import {configureStore} from '@reduxjs/toolkit';
import {doorReducer} from '../containers/DoorPassword/DoorPasswordSlice.ts';

export const store = configureStore({
    reducer: {
        pinPad: doorReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
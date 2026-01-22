import {createSlice} from '@reduxjs/toolkit';

interface DoorSlice {
    password: number;
}

const initialState: DoorSlice = {
    password: 1337,
};


export const doorSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {

    }
});
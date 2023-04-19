import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { studentsListModel } from '@/entities/students';

const makeStore = () =>
    configureStore({
        reducer: {
            [studentsListModel.name]: studentsListModel.reducer,
        },
        devTools: process.env.NODE_ENV === 'development',
    });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;

export const wrapper = createWrapper<RootStore>(makeStore);

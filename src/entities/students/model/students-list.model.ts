import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchStudentsList,
    StudentsListType,
    updateStudentApi,
} from '@/entities/students';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

type InitialStateType = {
    students: StudentsListType[];
};

const initialState: InitialStateType = {
    students: [],
};

export const studentsListModel = createSlice({
    name: 'studentsListModel',
    initialState,

    reducers: {
        setStudents(
            state: InitialStateType,
            action: PayloadAction<StudentsListType[]>
        ) {
            state.students = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(
            fetchStudentsList.fulfilled,
            (
                state: InitialStateType,
                action: PayloadAction<StudentsListType[]>
            ) => {
                // console.log('user list -->', action.payload);
                state.students = action.payload;
            }
        );

        builder.addCase(
            updateStudentApi.fulfilled,
            (
                state: InitialStateType,
                action: PayloadAction<StudentsListType>
            ) => {
                // console.log('user list -->', action.payload);
                state.students = state.students.map((s) => {
                    if (s.id === action.payload.id) {
                        return action.payload;
                    }

                    return s;
                });
            }
        );

        builder.addCase(
            HYDRATE,
            (state: InitialStateType, action: AnyAction) => {
                return {
                    ...state,
                    ...action.payload[studentsListModel.name],
                };
            }
        );
    },
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'query-string';
import {
    StudentsListSortType,
    StudentsListType,
    StudentsUpdateParamsType,
} from '@/entities/students';
import { envConfig } from '@/shared/config';

export const fetchStudentsList = createAsyncThunk<
    StudentsListType[],
    StudentsListSortType
>('students/fetchList', async (query?: StudentsListSortType) => {
    try {
        const res = await fetch(
            envConfig.BASE_API_URL + `/students?` + qs.stringify(query)
        );
        return res.json();
    } catch (e) {
        console.error(e);
    }
});

export type UpdateStudentApiParamsType = {
    id: string;
    params: StudentsUpdateParamsType;
};

export const updateStudentApi = createAsyncThunk<
    StudentsListType,
    UpdateStudentApiParamsType
>('students/updateApi', async ({ id, params }) => {
    try {
        const res = await fetch(envConfig.BASE_API_URL + `/students/${id}`, {
            method: 'PUT',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    } catch (e) {
        console.error(e);
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { StudentsListType } from '@/entities/students';

export const fetchStudentsList = createAsyncThunk<StudentsListType[]>(
    'students/fetchList',
    async () => {
        try {
            const res = await fetch('http://localhost:3000/students.json');
            return res.json();
        } catch (e) {
            console.error(e);
        }
    }
);

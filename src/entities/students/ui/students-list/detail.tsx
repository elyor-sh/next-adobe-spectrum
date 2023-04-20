import React, { useState } from 'react';
import { AnyAction } from 'redux';
import {
    StudentsMappedToTableType,
    updateStudentApi,
} from '@/entities/students';
import { ProgressBar, Slider, Button } from '@adobe/react-spectrum';
import { useAppDispatch } from '@/store';

export type StudentDetailProps = {
    student: StudentsMappedToTableType;
    isEdit: boolean;
    setOpen: (p: boolean) => void;
};

const StudentDetail = ({ student, isEdit, setOpen }: StudentDetailProps) => {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState(student.progress);

    const handleUpdate = () => {
        dispatch(
            updateStudentApi({
                id: student.id,
                params: {
                    progress: value,
                },
            }) as unknown as AnyAction
        );

        setOpen(false);
    };

    return (
        <div>
            <div className="mb-1">Student name: {student.name}</div>
            <div className="mb-1">Course name: {student.course}</div>
            <div className="mb-1">Module name: {student.module}</div>
            <div className="mb-1">Lesson name: {student.lesson}</div>
            <div className="mb-1">
                {isEdit ? (
                    <Slider
                        label="Progress:"
                        value={value}
                        onChange={setValue}
                    />
                ) : (
                    <ProgressBar
                        label="Progress:"
                        minValue={0}
                        maxValue={100}
                        value={student.progress}
                    />
                )}
            </div>
            {isEdit && (
                <Button variant="cta" onPress={handleUpdate}>
                    Save
                </Button>
            )}
        </div>
    );
};

export { StudentDetail };

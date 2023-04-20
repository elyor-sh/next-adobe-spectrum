import React from 'react';
import { DialogContainer, AlertDialog } from '@adobe/react-spectrum';

import { useAppSelector } from '@/store';
import { Table } from '@/shared/ui';
import {
    mapperStudentsToTable,
    StudentsMappedToTableType,
    useStudentListColumns,
} from '@/entities/students';
import { StudentDetail } from './detail';

const StudentsList = () => {
    const { students } = useAppSelector((state) => state.studentsListModel);

    const { columns, isOpen, setOpen, activeStudent, isEdit } =
        useStudentListColumns();

    return (
        <div>
            <Table<StudentsMappedToTableType>
                columns={columns}
                data={mapperStudentsToTable(students)}
            />
            <DialogContainer isDismissable onDismiss={() => setOpen(false)}>
                {isOpen && activeStudent && (
                    <AlertDialog
                        title={isEdit ? 'Edit' : 'View'}
                        variant="destructive"
                        primaryActionLabel="Delete"
                    >
                        <StudentDetail
                            student={activeStudent}
                            isEdit={isEdit}
                            setOpen={setOpen}
                        />
                    </AlertDialog>
                )}
            </DialogContainer>
        </div>
    );
};

export { StudentsList };

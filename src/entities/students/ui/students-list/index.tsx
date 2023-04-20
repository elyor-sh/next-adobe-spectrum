import React from 'react';
import { useAppSelector } from '@/store';
import { Table, TableColumnsType, TableColumnType } from '@/shared/ui';
import {
    mapperStudentsToTable,
    StudentsMappedToTableType,
} from '@/entities/students';
import { Flex, Button, ProgressBar } from '@adobe/react-spectrum';

const columns: TableColumnsType<StudentsMappedToTableType>[] = [
    {
        uuid: 1,
        rowKey: 'name',
        title: 'Student name',
        type: TableColumnType.STRING,
    },
    {
        uuid: 2,
        rowKey: 'course',
        title: 'Course name',
        type: TableColumnType.STRING,
    },
    {
        uuid: 3,
        rowKey: 'module',
        title: 'Module name',
        type: TableColumnType.STRING,
    },
    {
        uuid: 4,
        rowKey: 'lesson',
        title: 'Lesson name',
        type: TableColumnType.STRING,
    },
    {
        uuid: 5,
        rowKey: 'progress',
        title: 'Progress',
        type: TableColumnType.ACTION,
        action: (row) => (
            <>
                <ProgressBar
                    label={<></>}
                    minValue={0}
                    maxValue={100}
                    value={row.progress}
                />
            </>
        ),
    },
    {
        uuid: 6,
        rowKey: null,
        title: 'Actions',
        type: TableColumnType.ACTION,
        action: (row, col) => (
            <Flex direction="row" gap="size-100">
                <Button variant="accent" style="outline">
                    View
                </Button>
                <Button variant="primary" style="outline">
                    Edit
                </Button>
            </Flex>
        ),
    },
];

const StudentsList = () => {
    const { students } = useAppSelector((state) => state.studentsListModel);

    return (
        <div>
            <Table<StudentsMappedToTableType>
                columns={columns}
                data={mapperStudentsToTable(students)}
            />
        </div>
    );
};

export { StudentsList };

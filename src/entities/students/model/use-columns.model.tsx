import { SortIcon, TableColumnsType, TableColumnType } from '@/shared/ui';
import {
    fetchStudentsList,
    SortOrderByEnum,
    StudentsListSortType,
    StudentsListType,
    StudentsMappedToTableType,
} from '@/entities/students';
import { Button, Flex, ProgressBar } from '@adobe/react-spectrum';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '@/store';
import { AnyAction } from 'redux';

type HeadColumnType = {
    text: string;
    isDown: boolean;
};

const HeadColumn = ({ text, isDown }: HeadColumnType) => {
    return (
        <Flex direction="row" gap="size-100" alignItems="center">
            <span>{text}</span>{' '}
            <>
                <SortIcon isDown={isDown} />
            </>
        </Flex>
    );
};

export const useStudentListColumns = () => {
    const dispatch = useAppDispatch();

    const [isOpen, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [activeStudent, setActiveStudent] =
        useState<StudentsMappedToTableType | null>(null);

    const [sort, setSort] = useState<StudentsListSortType>({
        sortBy: 'name',
        order: SortOrderByEnum.asc,
    });

    const handleView = useCallback(
        (student: StudentsMappedToTableType, edit: boolean) => {
            setOpen(true);
            setActiveStudent(student);
            setIsEdit(edit);
        },
        []
    );

    const sortCheck = useCallback(
        (key: keyof StudentsListType) => {
            return !(sort.sortBy === key && sort.order === SortOrderByEnum.asc);
        },
        [sort]
    );

    const handleSort = useCallback(
        (sortBy: keyof StudentsListType) => {
            if (sort.sortBy === sortBy) {
                setSort((prev) => ({
                    ...prev,
                    order:
                        prev.order === SortOrderByEnum.asc
                            ? SortOrderByEnum.desc
                            : SortOrderByEnum.asc,
                }));
            } else {
                setSort(() => ({
                    sortBy,
                    order: SortOrderByEnum.asc,
                }));
            }
        },
        [sort]
    );

    useEffect(() => {
        dispatch(fetchStudentsList(sort) as unknown as AnyAction);
        // eslint-disable-next-line
    }, [sort]);

    const columns: TableColumnsType<StudentsMappedToTableType>[] =
        useMemo(() => {
            return [
                {
                    uuid: 1,
                    rowKey: 'name',
                    title: (
                        <HeadColumn
                            text="Student name"
                            isDown={sortCheck('name')}
                        />
                    ),
                    type: TableColumnType.STRING,
                    onColumnClick: (col) =>
                        col.rowKey ? handleSort(col.rowKey) : null,
                },
                {
                    uuid: 2,
                    rowKey: 'course',
                    title: (
                        <HeadColumn
                            text="Course name"
                            isDown={sortCheck('course')}
                        />
                    ),
                    type: TableColumnType.STRING,
                    onColumnClick: (col) =>
                        col.rowKey ? handleSort(col.rowKey) : null,
                },
                {
                    uuid: 3,
                    rowKey: 'module',
                    title: (
                        <HeadColumn
                            text="Module name"
                            isDown={sortCheck('module')}
                        />
                    ),
                    type: TableColumnType.STRING,
                    onColumnClick: (col) =>
                        col.rowKey ? handleSort(col.rowKey) : null,
                },
                {
                    uuid: 4,
                    rowKey: 'lesson',
                    title: (
                        <HeadColumn
                            text="Lesson name"
                            isDown={sortCheck('lesson')}
                        />
                    ),
                    type: TableColumnType.STRING,
                    onColumnClick: (col) =>
                        col.rowKey ? handleSort(col.rowKey) : null,
                },
                {
                    uuid: 5,
                    rowKey: 'progress',
                    title: (
                        <HeadColumn
                            text="Progress"
                            isDown={sortCheck('progress')}
                        />
                    ),
                    type: TableColumnType.ACTION,
                    onColumnClick: (col) =>
                        col.rowKey ? handleSort(col.rowKey) : null,
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
                    action: (row) => (
                        <Flex direction="row" gap="size-100">
                            <Button
                                variant="accent"
                                style="outline"
                                onPress={() => handleView(row, false)}
                            >
                                View
                            </Button>
                            <Button
                                variant="primary"
                                style="outline"
                                onPress={() => handleView(row, true)}
                            >
                                Edit
                            </Button>
                        </Flex>
                    ),
                },
            ];
        }, [handleSort, handleView, sortCheck]);

    return {
        columns,
        isOpen,
        setOpen,
        activeStudent,
        isEdit,
    };
};

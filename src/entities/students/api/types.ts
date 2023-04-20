export interface StudentsListType {
    id: string;
    name: string;
    progress: number;
    module: string;
    lesson: string;
    course: string;
}

export const enum SortOrderByEnum {
    asc = 'asc',
    desc = 'desc',
}

export type StudentsListSortType = {
    sortBy: keyof StudentsListType;
    order: SortOrderByEnum;
};

export type StudentsUpdateParamsType = Partial<StudentsListType>;

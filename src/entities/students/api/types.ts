export interface StudentsListType {
    id: number;
    name: string;
    progress: number;
    module: string;
    lesson: string;
    course: StudentsListTypeCourse;
}

export interface StudentsListTypeCourse {
    id: number;
    name: string;
}

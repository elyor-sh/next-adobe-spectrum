import { StudentsListType } from '@/entities/students';

export type StudentsMappedToTableType = {
    id: number;
    name: string;
    course: string;
    module: string;
    lesson: string;
    progress: number;
};

export const mapperStudentsToTable = (
    list: StudentsListType[]
): StudentsMappedToTableType[] => {
    return list.map((l) => ({
        id: l.id,
        name: l.name,
        course: l.course.name,
        lesson: l.lesson,
        module: l.module,
        progress: l.progress,
    }));
};

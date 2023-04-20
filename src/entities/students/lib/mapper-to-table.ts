import { StudentsListType } from '@/entities/students';

export type StudentsMappedToTableType = {
    id: string;
    name: string;
    course: string;
    module: string;
    lesson: string;
    progress: number;
};

// Сделал маппер ради демонстрации, что если не совпадает структур данных приходящие с сервера и структура данных нужная для фронта
export const mapperStudentsToTable = (
    list: StudentsListType[]
): StudentsMappedToTableType[] => {
    return list.map((l) => ({
        id: l.id,
        name: l.name,
        course: l.course,
        lesson: l.lesson,
        module: l.module,
        progress: l.progress,
    }));
};

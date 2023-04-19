import { useAppSelector, wrapper } from '@/store';
import { fetchStudentsList } from '@/entities/students';
import { AnyAction } from 'redux';

export default function Home() {
    const { students } = useAppSelector((state) => state.studentsListModel);

    console.log(students);

    return (
        <>
            <pre>{JSON.stringify(students, null, 2)}</pre>
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(fetchStudentsList() as AnyAction);

            return {
                props: {},
            };
        }
);

import { wrapper } from '@/store';
import { fetchStudentsList, StudentsList } from '@/entities/students';
import { AnyAction } from 'redux';
import { Container } from '@/shared/ui';

export default function Home() {
    return (
        <>
            <Container>
                <StudentsList />
            </Container>
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

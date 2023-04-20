import { ReactNode } from 'react';
import cl from './style.module.scss';
import Head from 'next/head';

export type LayoutProps = {
    children?: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
};

export const Layout = ({ header, footer, children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Next Adobe Spectrum</title>
            </Head>
            <div className={cl.layout}>
                <header>{header}</header>
                <main className={cl.main}>{children}</main>
                <footer>{footer}</footer>
            </div>
        </>
    );
};

import React from 'react';
import Link from 'next/link';
import cl from './style.module.scss';

const Header = () => {
    return (
        <>
            <div className={cl.wrapper}>
                <Link href="/">Next Adobe Spectrum</Link>
            </div>
        </>
    );
};

export { Header };

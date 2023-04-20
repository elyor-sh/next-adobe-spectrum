import React from 'react';
import cl from './style.module.scss';
import { cn } from '@/shared/lib';

export type ContainerProps = {
    children?: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn(cl.container, className)}>{children}</div>;
};

export { Container };

import React from 'react';
import cl from './style.module.scss';
import { SortDownIcon, SortUpIcon } from '@/shared/assets';
import { cn } from '@/shared/lib';

export type SortIconProps = {
    isDown?: boolean;
    className?: string;
};

const SortIcon = ({ isDown, className }: SortIconProps) => {
    return (
        <span className={cn(cl.icon, className)}>
            {isDown ? <SortDownIcon /> : <SortUpIcon />}
        </span>
    );
};

export { SortIcon };

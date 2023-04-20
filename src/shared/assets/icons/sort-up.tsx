import React from 'react';

const SortUpIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 18 18"
            width="18"
        >
            <rect
                id="Canvas"
                fill="#ff13dc"
                opacity="0"
                width="18"
                height="18"
            />
            <rect className="fill" height="2" rx="0.5" width="6" x="1" y="4" />
            <rect className="fill" height="2" rx="0.5" width="8" x="1" y="8" />
            <rect
                className="fill"
                height="2"
                rx="0.5"
                width="10"
                x="1"
                y="12"
            />
            <path
                className="fill"
                d="M15.99951,6H14.99634v7.5a.49378.49378,0,0,1-.49317.5h-.49633a.5.5,0,0,1-.5-.49951L13.50366,6H12.50049A.24984.24984,0,0,1,12.25,5.74823a.24439.24439,0,0,1,.07373-.175L14.0918,3.5564a.25007.25007,0,0,1,.3164,0l1.76807,2.01684a.24439.24439,0,0,1,.07373.175A.24984.24984,0,0,1,15.99951,6Z"
            />
        </svg>
    );
};

export { SortUpIcon };

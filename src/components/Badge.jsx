import React from "react";
import close from '../assets/closeX.svg'

export default function Badge({...props}) {
    const backgroundColor = props.color === 'blue' ? 'bg-blue' : 'bg-yellow';
    const textColor = props.color === 'blue' ? 'white' : 'darker-gray';

    return <>
        <button
            onClick={props.onClick}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg ${backgroundColor} text-${textColor} text-xs cursor-pointer`}
            >
                {props.name}
                <svg style={{ fill: textColor === 'white' ? '#FFFFFF' : '#505050' }} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_85_589)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.18198 2.81821C8.88909 2.52532 8.41421 2.52532 8.12132 2.81821L6 4.93953L3.87868 2.81821C3.58579 2.52532 3.11091 2.52532 2.81802 2.81821C2.52513 3.1111 2.52513 3.58598 2.81802 3.87887L4.93934 6.00019L2.81802 8.12151C2.52513 8.41441 2.52513 8.88928 2.81802 9.18217C3.11091 9.47507 3.58579 9.47507 3.87868 9.18217L6 7.06085L8.12132 9.18217C8.41421 9.47506 8.88909 9.47506 9.18198 9.18217C9.47487 8.88928 9.47487 8.4144 9.18198 8.12151L7.06066 6.00019L9.18198 3.87887C9.47487 3.58598 9.47487 3.1111 9.18198 2.81821Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_85_589">
                            <rect width="12" height="12" fill="currentColor"/>
                        </clipPath>
                    </defs>
                </svg>
        </button>
    </>
}
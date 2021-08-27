import React from 'react';
import style from './Card.module.css';

interface Props {
    className?: string;
    children?: React.ReactNode;
    onClick?: (e: React.SyntheticEvent) => any;
}

const Card = (props: Props) => {
    return (
        <div
            className={`${style.card} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export default Card;

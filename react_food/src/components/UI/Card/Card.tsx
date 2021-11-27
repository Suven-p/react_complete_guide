import React from 'react';

import classes from './Card.module.css';

interface Props {
    className?: string;
    children?: React.ReactNode;
    onClick?: Function;
}
const Card = (props: Props) => {
    return (
        <div className={`${props.className} ${classes.card}`}>
            {props.children}
        </div>
    );
};

export default Card;

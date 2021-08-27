import React from 'react';
import styles from './Button.module.css';

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    onClick?: (e: React.SyntheticEvent) => any;
    children?: React.ReactNode;
}

const Button = (props: Props) => {
    return (
        <button
            className={`${styles.button} ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;

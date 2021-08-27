import React from 'react';
import { ChangeEventHandler } from 'react';
import classes from './InputField.module.css';

interface Props {
    className?: string;
    label: string;
    isValid: boolean | null;
    id: string;
    type?: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: Props) => {
    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            } ${props.className}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type || 'text'}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
};

export default InputField;

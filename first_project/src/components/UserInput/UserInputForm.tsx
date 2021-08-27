import React, { useState } from 'react';
import styles from './UserInputForm.module.css';
import Button from '../UI/Button/Button';

interface Props {
    onError: (header: string, msg: string) => any;
    onAddNewUser: (name: string, age: string) => any;
}

const UserInputForm = (props: Props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const nameChangeHandler = (e: React.SyntheticEvent) => {
        const newValue = (e.target as HTMLInputElement).value;
        setName(newValue);
    };
    const ageChangeHandler = (e: React.SyntheticEvent) => {
        const newValue = (e.target as HTMLInputElement).value;
        setAge(newValue);
    };

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            props.onError(
                'Invalid Input',
                'Please enter a valid name and age (non-empty values).'
            );
            return;
        }
        // Allow values of 1e8 :)
        const adjustedValue = Number(age).toString();
        if (adjustedValue === 'NaN' || Number(age) <= 0) {
            props.onError('Invalid Age', 'Please enter a valid age (>0).');
            return;
        }
        props.onAddNewUser(name.trim(), adjustedValue);
        setName('');
        setAge('');
    };
    return (
        <form className={styles['form-controls']} onSubmit={submitHandler}>
            <div className={styles['form-control']}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    onChange={nameChangeHandler}
                    value={name}
                />
            </div>
            <div className={styles['form-control']}>
                <label htmlFor='age'>Age (Years)</label>
                <input
                    id='age'
                    onChange={ageChangeHandler}
                    value={age}
                    type='number'
                    step='1'
                    inputMode='numeric'
                />
            </div>
            <div className={styles['form-control']}>
                <Button type='submit'>Add User</Button>
            </div>
        </form>
    );
};

export default UserInputForm;

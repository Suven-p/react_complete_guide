import React from 'react';
import styles from './User.module.css';

interface UserInterface {
    name: string;
    age: string;
    id: string;
}

interface Props {
    user: UserInterface;
    onDelete: (id: string) => any;
}

const User = (props: Props) => {
    const clickHandler = (e: React.SyntheticEvent) => {
        props.onDelete(props.user.id);
        e.preventDefault();
    };
    return (
        <li className={styles['user-container']}>
            <span className={styles['user-data']}>
                {`${props.user.name} (${props.user.age} years old)`}
            </span>
            <i
                className={`fas fa-trash ${styles['delete-icon']}`}
                onClick={clickHandler}
            ></i>
        </li>
    );
};

export type { UserInterface };
export default User;

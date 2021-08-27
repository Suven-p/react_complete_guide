import React from 'react';
import styles from './Users.module.css';
import Card from '../UI/Card/Card';
import User, { UserInterface } from './User';
import { Fragment } from 'react';

interface Props {
    users: UserInterface[];
    onDelete: (id: string) => any;
}

const Users = (props: Props) => {
    if (props.users.length === 0) {
        return <Fragment></Fragment>;
    }
    return (
        <Card>
            <ul className={styles['users-container']}>
                {props.users.map((user) => (
                    <User user={user} key={user.id} onDelete={props.onDelete} />
                ))}
            </ul>
        </Card>
    );
};

export type { UserInterface };
export default Users;

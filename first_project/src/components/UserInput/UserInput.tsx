import React, { useState, Fragment } from 'react';
import Card from '../UI/Card/Card';
import UserInputForm from './UserInputForm';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

interface Props {
    onAddNewUser: (name: string, age: string) => any;
}

const UserInput = (props: Props) => {
    const [error, setError] = useState('');
    const [header, setHeader] = useState('');
    const errorHandler = (header: string, msg: string) => {
        setHeader(header);
        setError(msg.trim());
    };
    const closeHandler = () => {
        setError('');
    };
    const errorModalBox: React.ReactNode =
        error.trim().length === 0 ? (
            ''
        ) : (
            <ErrorModal
                onClose={closeHandler}
                header={header}
                contents={error}
            />
        );
    return (
        <Fragment>
            <Card>
                <UserInputForm
                    onError={errorHandler}
                    onAddNewUser={props.onAddNewUser}
                />
            </Card>
            {errorModalBox}
        </Fragment>
    );
};

export default UserInput;

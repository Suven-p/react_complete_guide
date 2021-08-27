import React from 'react';
import styles from './ErrorModal.module.css';
import Modal from '../Modal/Modal';

interface Props {
    onClose: () => any;
    header: React.ReactNode;
    contents: React.ReactNode;
}

const ErrorModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose} className={styles['error-container']}>
            <h2 className={styles['error-header']}>{props.header}</h2>
            <p className={styles['error-contents']}>{props.contents}</p>
        </Modal>
    );
};

export default ErrorModal;

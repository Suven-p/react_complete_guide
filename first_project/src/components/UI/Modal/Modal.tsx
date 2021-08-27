import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

interface ModalProps {
    onClose: () => any;
    children?: React.ReactNode;
    className?: string;
}

interface DarkOverlayProps {
    onClose: ModalProps['onClose'];
}

const DarkOverlay = (props: DarkOverlayProps) => {
    const clickHandler = (e: React.SyntheticEvent) => {
        props.onClose();
        e.preventDefault();
        e.stopPropagation();
    };
    return <div className={styles.overlay} onClick={clickHandler} />;
};

const ModalOverlay = (props: ModalProps) => {
    const clickHandler = (e: React.SyntheticEvent) => {
        props.onClose();
        e.preventDefault();
        e.stopPropagation();
    };
    const dummy = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <Fragment>
            <Card
                className={`${styles.modalBox} ${props.className}`}
                onClick={dummy}
            >
                {props.children}
                <footer className={styles.modalClose}>
                    <Button
                        className={styles.modalCloseBtn}
                        onClick={clickHandler}
                    >
                        Close
                    </Button>
                </footer>
            </Card>
        </Fragment>
    );
};

const Modal = (props: ModalProps) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <DarkOverlay onClose={props.onClose} />,
                document.getElementById('backdrop-root') as HTMLElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay {...props} />,
                document.getElementById('overlay-root') as HTMLElement
            )}
        </Fragment>
    );
};

export default Modal;

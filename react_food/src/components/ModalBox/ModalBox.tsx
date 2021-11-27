import React, { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Card from '../UI/Card/Card';
import styles from './ModalBox.module.css';
import Overlay from './Overlay';

interface Props {
    isShown: boolean;
    setShow: (showModal: boolean) => any;
    children?: React.ReactNode;
}

const Modal = (props: Props) => {
    const [prevOverflow, setPrevOverflow] = useState(
        document.body.style.overflow
    );
    const temp = prevOverflow;
    useEffect(() => {
        if (props.isShown) {
            setPrevOverflow(document.body.style.overflow);
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = temp;
            };
        }
    }, [temp, props.isShown]);
    const overlayClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        props.setShow(false);
    };
    const cardClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return createPortal(
        <div
            className={styles['overlay-wrapper']}
            onClick={overlayClickHandler}
        >
            <Card className={styles['overlay-card']} onClick={cardClickHandler}>
                {props.children}
            </Card>
        </div>,
        document.getElementById('modal') as Element
    );
};
const ModalBox = (props: Props) => {
    return (
        <Fragment>
            <Overlay setShow={props.setShow} />
            <Modal {...props} />
        </Fragment>
    );
};

export default ModalBox;

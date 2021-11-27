import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Overlay.module.css';

interface Props {
    setShow: (showModal: boolean) => any;
}

const Overlay = (props: Props) => {
    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        props.setShow(false);
    };
    return createPortal(
        <div className={styles.overlay} onClick={clickHandler}></div>,
        document.getElementById('overlay') as Element
    );
};

export default Overlay;

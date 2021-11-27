import React, { Fragment } from 'react';
import styles from './CartModal.module.css';
import ModalBox from '../ModalBox/ModalBox';
import Cart from '../Cart/Cart';

interface Props {
    isShown: boolean;
    setShow: (showModal: boolean) => any;
}

const CartModal = (props: Props) => {
    const closeHandler = () => {
        props.setShow(false);
    };
    const orderHandler = () => {
        console.log('Ordering...');
    };
    return (
        <Fragment>
            <ModalBox setShow={props.setShow} isShown={props.isShown}>
                <Cart />
                <div className={styles.actions}>
                    <button
                        className={styles['close-btn']}
                        onClick={closeHandler}
                    >
                        Close
                    </button>
                    <button
                        className={styles['order-btn']}
                        onClick={orderHandler}
                    >
                        Order
                    </button>
                </div>
            </ModalBox>
        </Fragment>
    );
};

export default CartModal;

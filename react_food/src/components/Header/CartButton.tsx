import React, { useState, Fragment } from 'react';
import CartModal from '../CartModal/CartModal';
import styles from './CartButton.module.css';
import CartIcon from './CartIcon';

interface Props {}

const CartButton = (props: Props) => {
    const [showCart, setShowCart] = useState(false);
    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setShowCart(true);
    };

    return (
        <Fragment>
            <button className={styles.button} onClick={clickHandler}>
                <div className={styles.icon}>
                    <CartIcon />
                </div>
                <div className={styles.cartText}>Your cart</div>
                <div className={styles.badge}>0</div>
            </button>
            {showCart && <CartModal setShow={setShowCart} isShown={showCart} />}
        </Fragment>
    );
};

export default CartButton;

import React, { Fragment, useContext } from 'react';
import styles from './Cart.module.css';
import CartStore from '../../store/CartStore';
import CartItem from './CartItem';

interface Props {}

const Cart = (props: Props) => {
    const ctx = useContext(CartStore);
    return (
        <Fragment>
            <div className={styles.cart}>
                {ctx.data.items.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                })}
                <div className={styles.separator} />
            </div>
            <div className={styles.amount}>
                <h2>Total Amount</h2>
                <h2>${Math.round(ctx.data.totalAmount * 100) / 100}</h2>
            </div>
        </Fragment>
    );
};

export default Cart;

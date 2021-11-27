import React from 'react';
import styles from './CartItem.module.css';
import { CartStoreItem } from '../../store';
import { useContext } from 'react';
import CartStore from '../../store/CartStore';

interface Props {
    item: CartStoreItem;
}

const CartItem = (props: Props) => {
    const ctx = useContext(CartStore);
    const addHandler = () => {
        ctx.onAdd({ ...props.item, numberOfItems: 1 });
    };
    const deleteHandler = () => {
        ctx.onRemove(props.item.id);
    };
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <div className={styles.itemName}>{props.item.name}</div>
                <div className={styles.itemInfo}>
                    <div className={styles.itemPrice}>${props.item.price}</div>
                    <div className={styles.itemNumber}>
                        x {props.item.numberOfItems}
                    </div>
                </div>
            </div>
            <div className={styles.itemControls}>
                <button onClick={deleteHandler}>-</button>
                <button onClick={addHandler}>+</button>
            </div>
        </div>
    );
};

export default CartItem;

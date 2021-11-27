import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import { MealDataInterface } from '../MealItems/MealItems';
import MealDescription from './MealDescription';
import CartStore from '../../store/CartStore';
import CartInterface from '../../store';
import { useState } from 'react';

interface Props {
    meal: MealDataInterface;
}

const MealItem = (props: Props) => {
    const [numItems, setNumItems] = useState('1');
    const context = useContext(CartStore);
    const onAdd = (e: React.SyntheticEvent) => {
        const newItem: CartInterface.CartStoreItem = {
            ...props.meal,
            numberOfItems: +numItems,
        };
        context.onAdd(newItem);
        e.preventDefault();
    };
    const onInputChange = (e: React.SyntheticEvent) => {
        setNumItems((e.target as HTMLInputElement).value);
    };
    return (
        <div className={styles.meal}>
            <MealDescription
                name={props.meal.name}
                description={props.meal.description}
                price={props.meal.price}
            />

            <form className={`${styles.mealForm}`} onSubmit={onAdd}>
                <div className={styles.input}>
                    <label htmlFor={props.meal.id}>Amount</label>
                    <input
                        id={props.meal.id}
                        type='number'
                        step='1'
                        value={numItems}
                        onChange={onInputChange}
                    />
                </div>
                <button>+ Add</button>
            </form>
        </div>
    );
};

export default MealItem;

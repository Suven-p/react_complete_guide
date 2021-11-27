import React from 'react';
import styles from './MealDescription.module.css';

interface Props {
    name: string;
    description: string;
    price: number;
}

const MealDescription = (props: Props) => {
    return (
        <div className={styles.descriptionContainer}>
            <span className={styles.name}>{props.name}</span>
            <span className={styles.description}>{props.description}</span>
            <span className={styles.price}>${props.price}</span>
        </div>
    );
};

export default MealDescription;

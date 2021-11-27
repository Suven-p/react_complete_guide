import React from 'react';
import styles from './MealsSummary.module.css';
import Card from '../UI/Card/Card';

interface Props {}

const MealsSummary = (props: Props) => {
    return (
        <Card className={styles.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </Card>
    );
};

export default MealsSummary;
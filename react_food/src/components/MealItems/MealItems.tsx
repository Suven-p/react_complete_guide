import React from 'react';
import styles from './MealItems.module.css';
import Card from '../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

interface MealDataInterface {
    id: string;
    name: string;
    description: string;
    price: number;
}

interface Props {
    data: MealDataInterface[];
}

const MealItems = (props: Props) => {
    return (
        <Card className={styles.mealItems}>
            {props.data.map((meal) => {
                return <MealItem meal={meal} key={meal.id} />;
            })}
        </Card>
    );
};

export default MealItems;
export type { MealDataInterface };

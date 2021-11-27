import React from 'react';
import styles from './HeroImage.module.css';
import MealsImage from './meals.jpg';
interface Props {}

const HeroImage = (props: Props) => {
    return (
        <div className={styles['main-image']}>
            <img src={MealsImage} alt='Meals' />
        </div>
    );
};

export default HeroImage;

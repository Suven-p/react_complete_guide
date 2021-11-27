import React, { Fragment } from 'react';
import CartButton from './CartButton';
import styles from './Header.module.css';
import HeroImage from '../HeroImage/HeroImage';
import MealsSummary from '../MealsSummary/MealsSummary';

interface Props {}

const Header = (props: Props) => {
    return (
        <Fragment>
            <div className={styles.navbarBox}>
                <nav>
                    <div className={styles.logo}>ReactMeals</div>
                    <CartButton />
                </nav>
            </div>
            <HeroImage />
            <MealsSummary />
        </Fragment>
    );
};

export default Header;

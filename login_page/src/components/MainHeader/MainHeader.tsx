import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => {
    const ctx = useContext(AuthContext);
    return (
        <header className={classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation onLogout={ctx.onLogout} />
        </header>
    );
};

export default MainHeader;

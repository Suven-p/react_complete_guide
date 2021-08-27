import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

interface HomeProps {}

const Home = (props: HomeProps) => {
    const ctx = useContext(AuthContext);
    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={ctx.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;

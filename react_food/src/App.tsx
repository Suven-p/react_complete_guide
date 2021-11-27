import React from 'react';
import Header from './components/Header/Header';
import MealItems from './components/MealItems/MealItems';
import dummyMealData from './dummyMealData';
import { CartStoreProvider } from './store/CartStore';

function App() {
    return (
        <CartStoreProvider>
            <Header />
            <MealItems data={dummyMealData} />
        </CartStoreProvider>
    );
}

export default App;

import { MealDataInterface } from '../components/MealItems/MealItems';

export interface CartStoreItem extends MealDataInterface {
    numberOfItems: number;
}

export interface CartStoreInterface {
    items: CartStoreItem[];
    totalAmount: number;
}

export interface CartStoreAddAction {
    type: 'ADD_ITEM';
    value: CartStoreItem;
}

export interface CartStoreRemoveAction {
    type: 'REMOVE_ITEM';
    value: string;
}

export type CartStoreAction = CartStoreAddAction | CartStoreRemoveAction;

export type CartStoreReducer = (state: CartStoreInterface, action: CartStoreAction) => any;

export as namespace CartStore;
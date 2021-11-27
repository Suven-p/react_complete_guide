import React, { useReducer } from 'react';
import {
    CartStoreAddAction,
    CartStoreInterface,
    CartStoreReducer,
    CartStoreRemoveAction,
} from '.';

const defaultCartStoreValue: CartStoreInterface = {
    items: [],
    totalAmount: 0,
};

const defaultContextValue: {
    data: CartStoreInterface;
    onAdd: (value: CartStoreAddAction['value']) => any;
    onRemove: (value: CartStoreRemoveAction['value']) => any;
} = {
    data: defaultCartStoreValue,
    onAdd: (v) => {},
    onRemove: (v) => {},
};

const CartStore = React.createContext(defaultContextValue);

interface Props {
    children?: React.ReactNode;
}
const CartStoreProvider = (props: Props) => {
    const reducerFunc: CartStoreReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_ITEM': {
                const updatedAmount =
                    state.totalAmount +
                    action.value.price * action.value.numberOfItems;
                const existingIndex = state.items.findIndex(
                    (item) => item.id === action.value.id
                );
                let newItems: CartStore.CartStoreItem[];
                if (existingIndex === -1) {
                    newItems = [...state.items, action.value];
                } else {
                    newItems = state.items.map((item) => {
                        return { ...item };
                    });
                    newItems[existingIndex].numberOfItems +=
                        action.value.numberOfItems;
                }
                return {
                    ...state,
                    items: newItems,
                    totalAmount: updatedAmount,
                };
            }
            case 'REMOVE_ITEM': {
                const deleteItemIndex = state.items.findIndex(
                    (item) => item.id === action.value
                );
                const deleteItem = state.items[deleteItemIndex];
                const updatedAmount = state.totalAmount - deleteItem.price;
                let newItems: CartStore.CartStoreItem[];
                if (deleteItem.numberOfItems > 1) {
                    newItems = state.items.map((item) => {
                        return { ...item };
                    });
                    newItems[deleteItemIndex].numberOfItems -= 1;
                } else {
                    newItems = state.items.filter(
                        (item) => item.id !== action.value
                    );
                }
                return {
                    ...state,
                    items: newItems,
                    totalAmount: updatedAmount,
                };
            }
            default:
                return state;
        }
    };

    const [cartState, cartStateDispatch] = useReducer(
        reducerFunc,
        defaultCartStoreValue
    );
    const onAdd = (value: CartStoreAddAction['value']) => {
        cartStateDispatch({ type: 'ADD_ITEM', value: value });
    };
    const onRemove = (value: CartStoreRemoveAction['value']) => {
        cartStateDispatch({ type: 'REMOVE_ITEM', value: value });
    };

    return (
        <CartStore.Provider
            value={{ data: cartState, onAdd: onAdd, onRemove: onRemove }}
        >
            {props.children}
        </CartStore.Provider>
    );
};

export default CartStore;
export { CartStoreProvider };

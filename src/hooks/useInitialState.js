import React, { useState } from 'react';

const initialState = {
    cart: [],
    orders: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        const product = state.cart.find(i => i.id === payload.id);

        const newCart = product ? state.cart.map((i) => {
            if(i.id === payload.id) {
                return {...i, quantity: i.quantity + 1, subtotal: i.subtotal + payload.price}
            }
            return i;
        }) : [...state.cart, { ...payload, quantity: 1, subtotal: payload.price}];

        setState({
            ...state,
            cart: newCart
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
    }
}

export default useInitialState;

import {ADD_CART_ITEM, REMOVE_CART_ITEM } from "./action-types";

export default (state, action) =>{
    switch(action.type){
        case ADD_CART_ITEM:
            return [...state, action.payload];
        case REMOVE_CART_ITEM:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}
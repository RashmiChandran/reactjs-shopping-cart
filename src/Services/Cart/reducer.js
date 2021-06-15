import {ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_ITEM_COUNT } from "./action-types";

export default (state, action) =>{
    switch(action.type){
        case ADD_CART_ITEM:
            return [...state, action.payload];
        case REMOVE_CART_ITEM:
            let currrentState=  state.filter(item => item.id !== action.payload.id);
            return currrentState;
        case UPDATE_CART_ITEM_COUNT:
            var index = state.findIndex(x=> x.id === action.payload.id);
            return [...state.slice(0,index),
            Object.assign( state[index], action.payload),
            ...state.slice(index+1)]
        default:
            return state;
    }
}
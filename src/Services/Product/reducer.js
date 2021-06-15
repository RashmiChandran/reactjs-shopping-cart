import {FETCH_PRODUCTS } from "./action-types";

export default (state=[], action) =>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return action.payload;
          default:
            return state;
    }
}
import {FETCH_PRODUCTS } from "./action-types";

export default (state={items:null}, action) =>{
    switch(action.type){
        case FETCH_PRODUCTS:
          return {...state,items: action.payload}
          default:
            return state;
    }
}
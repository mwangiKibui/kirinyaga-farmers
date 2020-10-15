import * as types from './types';

const initial_state = {
    loading:false,
    products:[],
    farmer_products:[],
    error:'',
    message:'',
    product:{}
};

export default (state = initial_state,action) => {
    switch(action.type) {
        case types.LOADING:
            return {
                ...state,
                loading:true,
                error:'',
                message:''
            };
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                loading:false,
                products:action.payload
            };
        case types.FETCH_FARMER_PRODUCTS:
            return {
                ...state,
                loading:false,
                farmer_products:action.payload
            };
        case types.DELETE_FARMER_PRODUCTS:
            return {
                ...state,
                loading:false,
                farmer_products:[]
            };
        case types.MESSAGE:
            return {
                ...state,
                loading:false,
                message:action.payload
            };
        case types.ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            };
        case types.SETOFFLOADING:
            return {
                ...state,
                loading:false
            };
        case types.SET_PRODUCT:
            return {
                ...state,
                loading:false,
                product:action.payload
            };
        case types.DELETE_FARMER_PRODUCT:
            return {
                ...state,
                loading:false,
                farmer_products:state.farmer_products.filter(prod => prod._id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
};
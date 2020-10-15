import * as types from './types';

const initial_state = {
    loading:false,
    token:'',
    farmer:{},
    farmers:[],
    farmers_loop:[],
    error:''
};

export default (state = initial_state,action) => {
    switch(action.type){
        case types.LOADING:
            return {
                ...state,
                loading:true,
                error:''
            };
        case types.TOKEN:
            return {
                ...state,
                loading:false,
                token:action.payload
            };
        case types.FARMER:
            return {
                ...state,
                loading:false,
                farmer:action.payload
            };
        case types.FARMERS:
            return {
                ...state,
                loading:false,
                farmers:action.payload
            };
        case types.ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            };
        case types.FARMERS_LOOP:
            return {
                ...state,
                loading:false,
                farmers_loop:action.payload
            };
        case types.LOGOUT:
            return {
                ...state,
                loading:false,
                token:'',
                farmers_loop:[],
                farmers:[],
                farmer:{}
            }
        default:
            return {
                ...state
            }

    }
}
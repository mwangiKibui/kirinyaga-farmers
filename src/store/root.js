import {combineReducers} from 'redux';
import farmerReducer from './farmer';
import productReducer from './product';

export default combineReducers({
    farmer:farmerReducer,
    products:productReducer
})
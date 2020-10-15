import * as types from './types';

export const setLoading = () => (
    {
        type:types.LOADING
    }
);

export const setFarmerProducts = data => (
    {
        type:types.FETCH_FARMER_PRODUCTS,
        payload:data
    }
);

export const setProducts = data => (
    {
        type:types.FETCH_PRODUCTS,
        payload:data
    }
);

export const setDeleteProducts = () => (
    {
        type:types.DELETE_FARMER_PRODUCTS
    }
);

export const setMessage = data => (
    {
        type:types.MESSAGE,
        payload:data
    }
);

export const setError = data => (
    {
        type:types.ERROR,
        payload:data
    }
);

export const setOffLoading = () => (
    {
        type:types.SETOFFLOADING
    }
);

export const setProduct = data => (
    {
        type:types.SET_PRODUCT,
        payload:data
    }
);

export const setDeleteProduct = data => (
    {
        type:types.DELETE_FARMER_PRODUCT,
        payload:data
    }
);
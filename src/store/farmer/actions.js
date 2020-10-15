import * as types from './types';

export const setLoading = () => ({
    type:types.LOADING
});

export const setToken = data => ({
    type:types.TOKEN,
    payload:data
});

export const setError = data => ({
    type:types.ERROR,
    payload:data
});

export const setFarmer = data => ({
    type:types.FARMER,
    payload:data
});

export const setFarmers = data => ({
    type:types.FARMERS,
    payload:data
});

export const  setFarmersLoop = data => ({
    type:types.FARMERS_LOOP,
    payload:data
});

export const setLogout = () => ({
    type:types.LOGOUT
})
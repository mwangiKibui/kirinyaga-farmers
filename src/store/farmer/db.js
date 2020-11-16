import * as actions from './actions';

import axios from 'axios';

let url;
if(process.env.NODE_ENV === "production"){
    url = `https://client-work.allcomrades.co.ke/api/v1/kf/farmer`;
}else if(process.env.NODE_ENV === "development"){
    url = `http://localhost:4000/api/v1/kf/farmer`;
};

//creating account
export const signup = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/signup`,data,{
        headers:{'content-type':'application/json'}
    })

    .then(res => {
        let isSuccessful = res.data.success;
        if(!isSuccessful) return dispatch(actions.setError(res.data.message));
        return dispatch(actions.setToken(res.data.message));
    })
    .catch(console.log);

};
//logging into account
export const login = data => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/login`,data,{
        headers:{'content-type':'application/json'}
    })
    .then(res => {
        let isSuccessful = res.data.success;
        if(!isSuccessful) return dispatch(actions.setError(res.data.message));
        return dispatch(actions.setToken(res.data.message));
    })
    .catch(console.log);

};

//decoding an authentication token
export const decode_token = token => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/decode`,{
        headers:{'Authorization':`BEARER ${token}`}
    })

    .then(res => dispatch(actions.setFarmer(res.data.message)))
    .catch(console.log);

};

//getting list of farmers for a given product.
export const getFarmers = product => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/getFarmers/${product}`)

    .then(res => dispatch(actions.setFarmers(res.data.message)))

    .catch(console.log);
};

//fetching the farmers loop
export const fetchFarmers = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/loop`)

    .then(res => dispatch(actions.setFarmersLoop(res.data.message)))

    .catch(console.log);
};

//logging out as a farmer
export const logout = () => async dispatch => {
    
    dispatch(actions.setLoading());

    return dispatch(actions.setLogout());

}
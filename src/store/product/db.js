import axios from 'axios';

import * as actions from './actions';

let url;

if(process.env.NODE_ENV === "production"){
    url = `https://client-jobs.xyz/api/v1/kf`;
}else if (process.env.NODE_ENV === "development"){
    url = 'http://localhost:5000/api/v1/kf';
};

//fetching the products.
export const fetchProducts = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/products/get`)
    .then(res => dispatch(actions.setProducts(res.data.message)))
    .catch(console.log);


};

//adding a product.
export const addProduct = (data) => async dispatch => {
    dispatch(actions.setLoading());

    await axios.post(`${url}/products/addProduct`,data,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
    .then(res => {
        let isSuccessful = res.data.success;
        if(!isSuccessful) return dispatch(actions.setError(res.data.message));
        return dispatch(actions.setMessage(res.data.message))
    })
    .catch(console.log);
};


//fetching a specific product
export const fetchProduct = (product,farmer) => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/products/getProduct/${product}/${farmer}`)

    .then(res => dispatch(actions.setProduct(res.data.message)))

    .catch(console.log);
};

//log out products
export const logOutProducts = () => async dispatch => {
    dispatch(actions.setLoading());
    return dispatch(actions.setDeleteProducts());
};

//getting a farmers products
export const fetchFarmerProducts = farmer => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/farmer/getProducts/${farmer}`)

    .then(res => dispatch(actions.setFarmerProducts(res.data.message)))

    .catch(console.log);
    
};

//deleting a product
export const deleteFarmerProduct = (farmer,product) => async dispatch => {
    dispatch(actions.setLoading());

    await axios.delete(`${url}/products/delete/${farmer}/${product}`)

    .then( () => dispatch(actions.setDeleteProduct(product)))

    .catch(console.log);
}
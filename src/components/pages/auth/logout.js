import React,{useEffect} from 'react';

//third-party
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
//components
import {logout} from '../../../store/farmer';
import {logOutProducts} from '../../../store/product';

const Logout = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(logout());
        dispatch(logOutProducts());

    },[dispatch])

    return (
        <Redirect to="/auth/signin" />
    );

};

export default Logout;
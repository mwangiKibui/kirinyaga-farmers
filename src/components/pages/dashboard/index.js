import React,{useEffect,useState} from 'react';

//third-party
import {useDispatch,useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
//components
import {decode_token} from '../../../store/farmer';
import DashboardHome from '../../blocks/dashboard-home';
import Products from '../../shared/account/dashboard/Products';

const Dashboard = () => {

    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true);
    const [redirect,setRedirect] = useState(false);

    const {token,farmer} = useSelector(state => state.farmer);

    useEffect(() => {

        //we first check if we got a token.
        if(!token) return setRedirect(true);

        //check if the token is decoded.
        if(Object.keys(farmer).length === 0) {

            dispatch(decode_token(token));

            return setLoading(false);
        };

        return setLoading(false);

    },[dispatch,token,farmer])

    return redirect ? (
        <Redirect to="/auth/signin" />
    )  : (
        <section className="account-dashboard">
                <div className="row">

                    {
                        loading ? (
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <ClipLoader size={35} color="#009933" />
                            </div>
                        ) : (
                            <div className="col-12 col-md-12 col-sm-12">
                                <DashboardHome />
                                <Products />
                            </div>
                        )
                    }
                    
                </div>
        </section>
    )
};


export default Dashboard;
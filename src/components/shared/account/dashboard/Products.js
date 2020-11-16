import React,{useState,useEffect} from 'react';

//third-party
import {useSelector,useDispatch} from 'react-redux';
import {ClipLoader} from 'react-spinners';
import {Redirect} from 'react-router-dom';

//components
import ProductsSection from '../../Products';
import {decode_token} from '../../../../store/farmer';

const Products = () => {

    const [loading,setLoading] = useState(true);
    const [redirect,setRedirect] = useState(false);
    const {token,farmer} = useSelector(state => state.farmer);
    const dispatch = useDispatch();

    useEffect( () => {

        const componentInitiator = async () => {

        //check if we have token
        if(!token) return setRedirect(true);

        //is it decoded
        if(Object.keys(farmer).length === 0){
            await dispatch(decode_token(token));
        };

        //then we can reset loading
        return setLoading(false);
        
        };

        componentInitiator();


    },[dispatch,token,farmer])
    

    return (
        redirect ? (
            <Redirect to="/auth/signin" />
        ) : (
        <section className="dashboard-products">
            <div className="container">
                {
                    loading ? (
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 text-center">
                            <ClipLoader color="#009933" />
                            </div>
                        </div>
                    ) : (
                        <ProductsSection />
                    )
                }
                
            </div>
        </section>
        )
    )
};

export default Products;
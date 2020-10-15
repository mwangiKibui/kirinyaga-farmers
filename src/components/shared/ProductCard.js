import React,{useState} from 'react';

//third-party
import {Card,CardMedia,IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {ScaleLoader} from 'react-spinners';
//components
import {deleteFarmerProduct} from '../../store/product';
import url from '../../utils/urls';

const ProductCard = ({data,admin}) => {

    const [loaded,setLoaded] = useState(false);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    let {farmer} = useSelector(state => state.farmer);

    const handleProductDelete = (product) => {
        
        setLoading(true);

        dispatch(deleteFarmerProduct(farmer['_id'],product));

        setTimeout( () => {
            return setLoading(false);
        },2000);


    };

    return (
            <Card className="product-card">
                
                <CardMedia className="product-card-media">
                
                <Link to={`/farmers/${data.name}`}>
                <div className="card-img-preview" style={{display:loaded ? 'none' : 'block'}} />
                </Link>
                
                <Link to={`/farmers/${data.name}`}>
                <img className='card-img-top card-img' 
                src={`${url}${data.image}`}
                onLoad={() => setLoaded(true)}
                style={{display:loaded ? 'block' : 'none'}}
                alt=""
                />
                </Link>

                <div className="product-card-media-overlay">

                    <div className="product-card-media-overlay-content">

                    <Link to={`/farmers/${data.name}`} className="product-card-media-heading">
                        {
                            data.name[0].toUpperCase()+data.name.slice(1)
                        }
                    </Link>

                    {
                        admin ? (
                            loading ? (
                            <IconButton className="product-card-icon-button">
                                <ScaleLoader color="#009933" width={2} height={15} radius={2} margin={2} />
                            </IconButton>
                            ) : (
                            <IconButton onClick={ () => handleProductDelete(data._id)}>
                                <Delete className="product-card-delete-icon" />
                            </IconButton>
                        )) : null
                    }

                    
                    </div>


                </div>

                </CardMedia>


            </Card>
    )
};

ProductCard.defaultProps = {
    admin:false
};

export default ProductCard;
import React,{useState} from 'react';

//third-party
import {Card,CardContent,CardMedia} from '@material-ui/core';
import {PhoneAndroid} from '@material-ui/icons';

//components
import url from '../../utils/urls';

const FarmersCard = ({data}) => {

    const [loaded,setLoaded] = useState(false);

    return (
        <div className="farmers-card-container">
            <Card className="farmer-card">

                <CardMedia className="farmer-card-cover">

                    <div className="farmer-img-preview" style={{display:loaded ? 'none' : 'block'}} />
                    <img 
                    className="farmer-img"
                    src={`${url}/${data.product.image}`}
                    onLoad={() => setLoaded(false)}
                    alt=""
                    />
                    
                </CardMedia>

                <div className="farmer-card-details">
                    <CardContent className="farmer-card-content">


                        <h5 className="farmer-card-name">Farmer: {data.farmer.name}</h5>
                        <p className="farmer-card-quantity">Quantity: {data.product.quantity}</p>
                        <p className="farmer-card-location">Location: {data.product.location}</p>
                        <p className="farmer-card-price">Price: Kshs {data.product.price}</p>
                        <h6 className="farmer-card-phone">
                            <PhoneAndroid className="farmer-card-phone-icon" />
                            <span className="farmer-card-phone-number">0{data.farmer.phone}</span>
                        </h6>
                    </CardContent>
                </div>

            </Card>
        </div>
    )
};

export default FarmersCard;
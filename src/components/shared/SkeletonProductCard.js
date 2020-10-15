import React from 'react';

//third-party
import {Card,CardMedia} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const ProductSkeletonCard = () => {

    return (
            <Card className="product-card">
                
                <CardMedia className="product-card-media">
                
                <Skeleton variant="rect" width={290} height={170} animation="wave" />

                </CardMedia>


            </Card>
    )
};

export default ProductSkeletonCard;
import React from 'react';

//third-party
import {Card,CardContent,CardMedia} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const SkeletonFarmersCard = () => {

    return (
        <div className="farmers-card-container">
            <Card className="farmer-card">

                <CardMedia className="farmer-card-cover">

                    <Skeleton variant="rect" width={300} height={200} animation="wave" />
                    
                </CardMedia>

                <div className="farmer-card-details">
                    <CardContent className="farmer-card-content">
                        <h4 className="farmer-card-name">
                            <Skeleton width={150} height={20} />
                        </h4>
                        <h5 className="farmer-card-email">
                            <Skeleton width={150} height={20} />
                        </h5>
                        <ul className="farmer-card-social-media">
                            <Skeleton width={150} height={20}/>
                        </ul>
                        <h6 className="farmer-card-phone">
                            <Skeleton width={100} height={20} />
                        </h6>
                    </CardContent>
                </div>

            </Card>
        </div>
    )
};

export default SkeletonFarmersCard;
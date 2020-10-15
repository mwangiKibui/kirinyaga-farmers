import React from 'react';

//third-party

import Slider from 'react-slick';
import {Link} from 'react-scroll';

//components
import {data,settings} from '../../utils/slider';


const HomeSlider = () => {
    return (
        <div className="block-slider">
            <Slider {...settings}>
            {
                data.map((slider_data,index) => (
                    <React.Fragment key={index}>
                    <div className="block-slider-component" style={{backgroundImage:`url(${slider_data.image})`}}>

                        <div className="block-slider-component-overlay">
                            <div className="block-slider-component-content">
                                <h3 className="block-slider-heading">{slider_data.title}</h3>
                                <h6 className="block-slider-description">{slider_data.description}</h6>
                                <Link to={`${slider_data.url}`} 
                                spy={true} 
                                smooth={true}  
                                offset={-150} 
                                duration={500}
                                className="btn btn-success text-white">
                                    {slider_data.action}
                                </Link>
                            </div>
                        </div>

                    </div>
                    </React.Fragment>
                ))
            }
            </Slider>
        </div>
    )
};

export default HomeSlider;
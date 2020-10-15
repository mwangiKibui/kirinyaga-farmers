import React from 'react';

//third-party
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 about-section-img-container">

                    <img
                    src="/images/about.jpg"
                    className="about-section-img"
                    alt=""
                    />

                </div>
                <div className="col-12 col-sm-6 col-md-6">

                <div className="about-section-content">
                    <p className="about-section-text">
                    We focus on promoting the Kirinyaga farmers by providing them with a platform
                     to market their cereals, fruits, vegetables and tubers which are the main products from the county.

                    <br />
                    <br />

                    The farmers are linked to retailers who visit the site to check the products available. Farmers can 
                    save their time farming since we sort them the marketing structure.

                    <br />
                    <br />
                    If you are a farmer join us to experience with us.

                    <br/>
                    </p>

                    <Link to="/auth/signin" className="btn btn-success">
                        Get started
                    </Link>
                    

                </div>

                </div>
            </div>
            </div>
        </section>
    )
};

export default About;
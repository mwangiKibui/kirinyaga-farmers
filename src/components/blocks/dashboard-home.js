import React from 'react';

//third-party
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const DashboardHome = () => {

    const {farmer} = useSelector(state => state.farmer);

    return (
        <section className="dashboard-home-component" style={{backgroundImage:"url('/images/dashboard-home.webp')"}}>
            <div className="dashboard-home-overlay">
                <div className="dashboard-home-content">
                    <h5 className="dashboard-home-content-heading">
                        Hello, its {farmer['name']}
                    </h5>
                    <Link to="/account/product-upload" className="btn btn-info">
                        add product
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default DashboardHome;
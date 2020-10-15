import React from 'react';

//third-party

//components
import Cereals from '../../shared/Cereals';
import Vegetables from '../../shared/Vegetables';
import Fruits from '../../shared/Fruits';
import Tubers from '../../shared/Tubers';

const ProductsSection = () => {
    return (
        <section className="products-section">
            <div className="container">
                <Cereals />
                <Vegetables />
                <Fruits />
                <Tubers />
            </div>
        </section>
    )
};

export default ProductsSection;
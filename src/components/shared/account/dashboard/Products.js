import React from 'react';

//components
import ProductsSection from '../../Products';

const Products = () => {
    return (
        <section className="dashboard-products">
            <div className="container">
                <ProductsSection />
            </div>
        </section>
    )
};

export default Products;
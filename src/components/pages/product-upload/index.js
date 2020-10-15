import React from 'react';

//components
import ProductUploadForm from '../../shared/account/product-upload/ProductUpload'

const ProductUpload = () => {
    return (
        <section className="product-upload-form-container">
            <div className="container-fluid">
                <div className="row">

                    <div className="d-none d-sm-block d-md-block col-sm-4 col-md-4">
                        <img 
                        className="product-upload-form-illustration" 
                        src="/images/illustration1.png"
                        alt=""
                        />
                    </div>

                    <div className="d-block d-sm-block d-md-block col-12 col-sm-4 col-md-4">
                        <ProductUploadForm />
                    </div>

                    <div className="d-none d-sm-block d-md-block col-sm-4 col-md-4">
                        <img 
                        className="product-upload-form-illustration" 
                        src="/images/illustration2.png"
                        alt=""
                        />
                    </div>
                    
            </div>
            </div>
        </section>
    )
};

export default ProductUpload;
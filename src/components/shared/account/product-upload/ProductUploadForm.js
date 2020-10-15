import React from 'react';

//third-party
import {Alert} from '@material-ui/lab';

const ProductUploadForm = (props) => {
    return (
        <section className="product-upload-form-content">
            <form onSubmit={props.onSubmit}>
                {
                    props.error ? (
                        <div className="form-group">
                            <Alert severity="error">{props.error}</Alert>
                        </div>
                    )  : null
                }
                {
                    props.message ? (
                        <div className="form-group">
                            <Alert severity="success">{props.message}</Alert>
                        </div>
                    ) : null
                }
                <div className="form-group">
                    <label htmlFor="name">Type of product</label>
                    <input type="text" 
                    className="form-control"
                    name="name"
                    value={props.name}
                    onChange={props.onChange}
                    placeholder="type of product e.g rice"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity of product</label>
                    <input type="text"
                    className="form-control"
                    name="quantity"
                    value={props.quantity}
                    onChange={props.onChange}
                    placeholder="quantity available e.g 1 suck"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location of farm</label>
                    <input type="text"
                    className="form-control"
                    name="location"
                    value={props.location}
                    onChange={props.onChange}
                    placeholder="where is the farm located e.g kutus" 
                    />
                </div>

                <>
                <label htmlFor="price">Price</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">KSHS</span>
                    </div>
                    <input type="text"
                        className="form-control"
                        name="price"
                        value={props.price}
                        onChange={props.onChange}
                        placeholder="for how much"
                        />
                </div>
                
                </>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category" className="form-control" onChange={props.onChange} value={props.category}>
                        <option value="">select category</option>
                        <option value="tubers">tubers</option>
                        <option value="vegetables">vegetables</option>
                        <option value="fruits">fruits</option>
                        <option value="cereals">cereals</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Product image</label>
                    {
                        props.preview_image ? (
                            <div className="row">
                                <div className="col-6 col-sm-4 col-md-4">
                                    <div className="product-upload-form-preview">
                                    <img
                                    className="product-upload-form-preview-img"
                                    src={props.preview_image}
                                    alt=""
                                    />
                                    <button className="btn btn-danger product-form-action" onClick={props.onCancelImage}>
                                        X
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }

                    {
                        !props.image ? (
                            <input type="file"
                                onChange={props.onImageUpload}
                                className="form-control"
                                />
                        ) : null
                    }
                    
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-success btn-block" value={props.action} /> 
                </div>

            </form>
        </section>
    )
};

export default ProductUploadForm;
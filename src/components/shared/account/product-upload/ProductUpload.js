import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
//components
import {addProduct} from '../../../../store/product';
import ProductUploadForm from './ProductUploadForm';

class ProductUpload extends Component {

    state = {

        name:'',
        quantity:'',
        location:'',
        price:'',
        farmer:this.props.farmer,
        category:'',
        image:'',
        preview_image:'',
        error:'',
        action:'Add product',
        message:''

    };

    componentDidUpdate(prevProps){
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error});
        };
        if(this.props.message !== prevProps.message){
            this.setState({message:this.props.message});
        }
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    onImageUpload = e => {
        let image = e.target.files[0];
        let allowed_types = ['image/jpeg','image/jpg','image/png','image/webp'];

        if(allowed_types.indexOf(image['type']) < 0) {
            this.setState({ error:'You must select an image file' });
            return e.target.value = null;
        };

        if(image.size > 5000000){
            this.setState({error:'Maximum size of an image is 5mb'});
            return e.target.value = null;
        };

        this.setState({
            image,
            preview_image:URL.createObjectURL(image)
        });
    };

    onCancelImage = () => {
        return this.setState({
            image:'',
            preview_image:''
        })
    };

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:'',message:''});

        //we do some verification of data.

        let {name,quantity,location,price,category,image,farmer} = this.state;
        if(!name || !quantity || !location || !price || !category || !image) return this.setState({
            error:'All fields are required'
        });

        let data = new FormData();
        let form_data = {name,quantity,location,price,category,farmer};
        for(const key of Object.keys(form_data)){
            data.append(key,form_data[key]);
        };
        data.append('product-image',image);

        //we send the data to server
        this.setState({action:'Loading...'});
        await this.props.addProduct(data);

        if(this.props.error) return this.setState({action:'Add product'});
        return this.setState({
            name:'',quantity:'',location:'',price:'',category:'',image:'',
            preview_image:'',error:'',action:'Add product'
        });


    }

    render (){
        const {name,quantity,location,price,category,image,preview_image,error,action,message} = this.state;
        return (
            <ProductUploadForm
            name={name}
            quantity={quantity}
            location={location}
            price={price}
            category={category}
            image={image}
            preview_image={preview_image}
            error={error}
            action={action}
            message={message}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onImageUpload={this.onImageUpload}
            onCancelImage={this.onCancelImage}
            />
        )
    };

};

const mapToProps = state => ({
    error:state.products.error,
    message:state.products.message,
    farmer:state.farmer.farmer._id
});

const dispatchToProps = {
    addProduct
};

export default connect(mapToProps,dispatchToProps)(ProductUpload);
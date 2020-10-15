import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';

//here we shall be fetching products of a specific farmer

//components
import {fetchFarmerProducts} from '../../store/product';
import ProductCard from '../shared/ProductCard';
import ProductSkeletonCard from '../shared/SkeletonProductCard';
import Error from './Error';

class Products extends Component {

    state = {
        loading:true,
        products:[]
    };

    async componentDidMount(){
        await this.props.fetchFarmerProducts(this.props.farmer)
    };

    componentDidUpdate(prevProps){
        if(this.props.products !== prevProps.products){
            this.setState({loading:false,products:this.props.products})
        }
    };

    render(){
        const {loading,products} = this.state;
        return(
            <section className="products-section">
                <div className="row">
                    {
                        loading ? (
                            new Array(4).fill().map((elem,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                    <ProductSkeletonCard elem={elem} />
                                </div> 
                            ))
                        ) : (

                            products.length > 0 ? (
                                products.map((product,index) => (
                                    <div className="col-12 col-sm-4 col-md-4" key={index}>
                                        <ProductCard data={product} admin={true}/>
                                    </div>
                                ))
                            ) : (
                                <Error message="You have not uploaded any product" />
                            )
                            
                        )
                    }
                </div>
            </section>
        )
    };

};

const mapToProps = state => ({
    products:state.products.farmer_products,
    farmer:state.farmer.farmer._id
});
const dispatchToProps = {
    fetchFarmerProducts
};

export default connect(mapToProps,dispatchToProps)(Products);
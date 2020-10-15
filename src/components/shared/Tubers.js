import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';

//components
import {fetchProducts} from '../../store/product';
import ProductCard from '../shared/ProductCard';
import ProductSkeletonCard from '../shared/SkeletonProductCard';
import BlockHeader from '../shared/BlockHeader';

class Tubers extends Component {

    state = {
        loading:true,
        products:[]
    };

    async componentDidMount(){
        await this.props.fetchProducts();
    };

    componentDidUpdate(prevProps){
        if(this.props.products !== prevProps.products){
            this.setState({loading:false,products:this.props.products})
        }
    };

    render(){
        const {loading,products} = this.state;
        return(
            <section className="products-section" id="tubers">
                <div className="row">
                    <BlockHeader message={'Cereals'} />
                    {
                        loading ? (
                            new Array(4).fill().map((elem,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                    <ProductSkeletonCard elem={elem} />
                                </div> 
                            ))
                        ) : (
                            products.map((product,index) => (
                                <div className="col-12 col-sm-3 col-md-3" key={index}>
                                    <ProductCard data={product} />
                                </div>
                            ))
                        )
                    }
                </div>
            </section>
        )
    };

};

const mapToProps = state => ({
    products:state.products.products.tubers
});
const dispatchToProps = {
    fetchProducts
};

export default connect(mapToProps,dispatchToProps)(Tubers);
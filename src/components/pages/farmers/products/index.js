import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
//components
import {getFarmers} from '../../../../store/farmer';
import FarmersCard from '../../../shared/FarmersCard';
import FarmersSkeletonCard from '../../../shared/SkeletonFarmersCard';

class Farmers extends Component {

    state = {
        product:this.props.match.params.product,
        loading:true,
        farmers:[]
    };

    async componentDidMount(){
        await this.props.getFarmers(this.state.product);
    };

    componentDidUpdate(prevProps){
        if(this.props.farmers !== prevProps.farmers){
            this.setState({
                farmers:this.props.farmers,
                loading:false
            })
        }
    };

    render(){
    const {loading,farmers} = this.state;
    return (
        <section className="farmers-section">
            <div className="container">
                <div className="row">
                    {
                        loading ? (
                            new Array(1).fill().map((elem,index) => (
                                <div className="col-12 col-sm-12 col-md-12" key={index}>
                                    <FarmersSkeletonCard elem={elem} />
                                </div>
                            ))
                        ) : (
                            farmers.map((farmer,index) => (
                                <div className="col-12 col-sm-12 col-md-12" key={index}>
                                    <FarmersCard data={farmer} />
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    )
    }
};

const mapToProps = state => ({
    farmers:state.farmer.farmers
});
const dispatchToProps = {
    getFarmers
};

export default connect(mapToProps,dispatchToProps)(Farmers);
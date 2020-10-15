import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//components
import {signup} from '../../../../store/farmer';
import SignupForm from './SignupForm';

class Signup extends Component {

    state = {
        name:'',
        password:'',
        phone:'',
        email:'',
        action:'Create account',
        redirect:false,
        error:''
    };

    componentDidUpdate(prevProps){
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error});
        }
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    validateEmail = e => {
        //eslint-disable-next-line
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(e);
    }

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:''})
        
        //verification of data,
        let {name,password,phone,email} = this.state;
        if(!name || !password || !phone || !email) return this.setState({error:'All fields are required'});

        //verify password.
        if(password.length < 6) return this.setState({error:'Minimum six characters for password'});

        //verify phone number
        if(phone.length !== 9) return this.setState({error:'Use the correct format for phone number'});

        //verify email
        if(!this.validateEmail(email)) return this.setState({error:'Invalid email address'});

        let data = {name,password,phone,email};

        //send the data to server
        this.setState({action:'Loading...'})
        await this.props.signup(data);

        if(this.props.error){
            return this.setState({action:'Create account'});
        };

        return this.setState({name:'',password:'',phone:'',email:'',redirect:true})

    };

    render(){
        const {redirect,name,password,phone,email,action,error} = this.state;
        
        return redirect ? (
            <Redirect to="/account/dashboard" />
        ) : (
            <SignupForm 
            name={name}
            password={password}
            phone={phone}
            email={email}
            action={action}
            error={error}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            />
        )

    }
};

const mapToProps = state => ({
    error:state.farmer.error
});
const dispatchToProps = {
    signup
};

export default connect(mapToProps,dispatchToProps)(Signup);
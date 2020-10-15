import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//components

import {login} from '../../../../store/farmer';
import LoginForm from './LoginForm';

class Login extends Component {
    state = {
        email:'',
        password:'',
        action:'Login',
        error:'',
        redirect:false
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    validateEmail = email => {
        //eslint-disable-next-line
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:''});
        
        //handle verification of data.

        let {email,password} = this.state;
        if(!email || !password) return this.setState({error:'Fill out all the fields'});

        //validate the email
        if(!this.validateEmail(email)) return this.setState({error:'Email is not valid'});
        let data = {email,password};

        //sending data to server
        this.setState({action:'Loading...'});
        await this.props.login(data);
        if(this.props.error){
            return this.setState({action:'Login'});
        };

        //else we can redirect
        return this.setState({email:'',password:'',redirect:true});

    };

    render(){
        const {redirect,action,error,email,password} = this.state;

        return redirect ? (
            <Redirect to="/account/dashboard" />
        )  : (
            <LoginForm 
            error={error} 
            email={email} 
            password={password}
            action={action}
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
    login
};

export default connect(mapToProps,dispatchToProps)(Login);
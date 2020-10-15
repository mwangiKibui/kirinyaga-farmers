import React from 'react';

//components
import LoginForm from '../../shared/account/auth/Login'

const Login = () => {
    return (
        <section className="login-form-container">
            <div className="container-fluid">
                <div className="row">

                    <div className="d-none d-sm-block d-md-block col-sm-4 col-md-4">
                        <img 
                        className="login-form-illustration" 
                        src="/images/illustration1.png"
                        alt=""
                        />
                    </div>

                    <div className="d-block d-sm-block d-md-block col-12 col-sm-4 col-md-4">
                        <LoginForm />
                    </div>

                    <div className="d-none d-sm-block d-md-block col-sm-4 col-md-4">
                        <img 
                        className="login-form-illustration" 
                        src="/images/illustration2.png"
                        alt=""
                        />
                    </div>
                    
            </div>
            </div>
        </section>
    )
};

export default Login;
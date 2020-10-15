import React from 'react';

//components
import SignupForm from '../../shared/account/auth/Signup';

const Signup = () => {
    return (
        <section className="signup-form-container">
            <div className="container-fluid">
            <div className="row">

                    <div className="d-none d-sm-block d-md-block col-sm-4 col-md-4">
                        <img 
                        className="signup-form-illustration" 
                        src="/images/illustration1.png"
                        alt=""
                        />
                    </div>

                    <div className="d-block d-sm-block d-md-block col-12 col-sm-4 col-md-4">
                        <SignupForm />
                    </div>

                    <div className="d-none d-sm-block d-md-block col-sm-4 col-md-4">
                        <img 
                        className="signup-form-illustration" 
                        src="/images/illustration2.png"
                        alt=""
                        />
                    </div>

            </div>
            </div>
        </section>
    )
};


export default Signup;